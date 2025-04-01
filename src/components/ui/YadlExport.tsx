import { useEffect, useState } from "react";
import getBlobDuration from "get-blob-duration";
import { fixWebmDuration } from "@fix-webm-duration/fix";
// New FFmpeg Start
import { fetchFile } from "@ffmpeg/util";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import coreURL from "@ffmpeg/core?url";
import wasmURL from "@ffmpeg/core/wasm?url";
// New FFmpeg End

export type BoxProps = {
  text?: string;
  width?: number;
  height?: number;
};

enum RecordingState {
  none = 0,
  recording = 1,
  stopped = 2,
}

enum ConversionState {
  none = 0,
  converting = 1,
  completed = 2,
}

const Box = (props: BoxProps) => {
  const { width = 200, height = 200 } = props;
  let mediaStream: MediaStream;
  let videoEl: HTMLVideoElement;
  let mediaRecorder: MediaRecorder;
  const mimeType = "video/webm;codecs=h264";

  const [recordingState, setRecordingState] = useState<RecordingState>(
    RecordingState.none
  );
  const [conversionState, setConversionState] = useState<ConversionState>(
    ConversionState.none
  );
  const [frameRate, setFrameRate] = useState<number>(15);
  const [videoBufferData, setVideoBufferData] = useState<any>();
  const [convertionMessage, setConvertionMessage] = useState<string>("");

  const startRecording = async () => {
    const width = window.innerWidth || 1280;
    const height = window.innerWidth || 720;

    const blobSlice: BlobPart[] = [];
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        width: width,
        height: height,
        frameRate: frameRate,
      },
      audio: false,
      // @ts-ignore
      preferCurrentTab: true,
    });

    videoEl.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream, {
      mimeType: mimeType,
    });
    mediaRecorder.addEventListener("dataavailable", async (event) => {
      var data = event.data;
      if (data && data.size > 0) {
        blobSlice.push(data);
      }
    });
    mediaRecorder.onstop = async () => {
      const finalBlob = new Blob([...blobSlice], { type: "video/webm" });
      const duration = await getBlobDuration(finalBlob);
      const fixedBlob = await fixWebmDuration(finalBlob, duration * 1000);
      setVideoBufferData(finalBlob);
      videoEl.srcObject = null;
      videoEl.src = URL.createObjectURL(fixedBlob);
      setRecordingState(RecordingState.stopped);
    };
    mediaRecorder.start();
    setRecordingState(RecordingState.recording);
  };

  // const stopRecording = () => {
  //   mediaStream.getTracks().forEach((track) => track.stop());
  //   mediaRecorder.stop();
  // };

  useEffect(() => {
    videoEl = document.getElementById("captured-video") as HTMLVideoElement;
  }, []);

  const convertToMp4 = async () => {
    setConversionState(ConversionState.converting);
    // New FFmpeg Start
    // @ts-ignore
    // const { fetchFile } = FFmpegUtil;
    // const { FFmpeg } = FFmpegWASM;
    // New FFmpeg End
    let ffmpeg;
    if (ffmpeg === undefined) {
      ffmpeg = new FFmpeg();
      // @ts-ignore
      ffmpeg.on("log", ({ message }) => {
        console.info(message);
      });
      // @ts-ignore
      ffmpeg.on("progress", ({ progress, time }) => {
        setConvertionMessage(`${progress * 100} %, time: ${time / 1000000} s`);
      });
      // await ffmpeg.load({
      //   coreURL: "/assets/core-mt/package/dist/umd/ffmpeg-core.js",
      // });
      // New FFmpeg Start
      await ffmpeg.load({ coreURL, wasmURL });
      // New FFmpeg End
      setConvertionMessage(`Loading complete...`);
    }
    const name = "toConvert.webm";
    await ffmpeg.writeFile(
      name,
      await fetchFile(URL.createObjectURL(videoBufferData))
    );
    setConvertionMessage(`Start transcoding`);

    await ffmpeg.exec(["-i", name, "output.mp4"]);
    setConvertionMessage(`Completed transcoding`);
    setConversionState(ConversionState.completed);

    const data = await ffmpeg.readFile("output.mp4");
    const video = document.getElementById("mp4-video");
    if (video) {
      // @ts-ignore
      video.src = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
    }
  };

  return (
    <>
      <div
        {...props}
        style={{
          width,
          height,
        }}
        className="bg-primary-content p-4 flex flex-col gap-4"
      >
        <div className="flex flex-row gap-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              startRecording();
            }}
          >
            Record
          </button>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Frame Rate</legend>
          <select
            className="select"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFrameRate(event.target.value as unknown as number);
            }}
            value={frameRate}
          >
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
            <option value={60}>60</option>
            <option value={120}>120</option>
          </select>
          {frameRate > 25 && (
            <span className="fieldset-label text-error">
              Larger framerate means larger time for conversion
            </span>
          )}
        </fieldset>
        {convertionMessage}
        <video
          id="captured-video"
          controls
          autoPlay
          style={{
            width: "100%",
            visibility:
              recordingState == RecordingState.stopped ? "visible" : "hidden",
          }}
        />
        {recordingState == RecordingState.stopped && (
          <button
            type="button"
            className={`btn btn-primary`}
            disabled={conversionState == ConversionState.converting}
            onClick={() => {
              convertToMp4();
            }}
          >
            {conversionState == ConversionState.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
            {conversionState == ConversionState.converting && (
              <span className="loading loading-spinner"></span>
            )}
            Convert To MP4
          </button>
        )}
        <video
          id="mp4-video"
          controls
          style={{
            width: "100%",
            visibility:
              conversionState == ConversionState.completed
                ? "visible"
                : "hidden",
          }}
        ></video>
      </div>
    </>
  );
};

export default Box;
