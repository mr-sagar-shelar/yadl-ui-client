import "./App.css";
import "./animate.min.css";
import "@xyflow/react/dist/style.css";
import "yadl-ui/dist/yadl-ui.css";
import {
  Button,
  AWS,
  GCPCertificateManager,
  YadlPreview,
  // YadlExport,
} from "yadl-ui";
import YadlExport from "./components/ui/YadlExport";

function App() {
  const nodes = [
    {
      id: "1",
      data: { label: "Hello" },
      position: { x: 0, y: 0 },
      type: "input",
    },
    {
      id: "2",
      data: { label: "World" },
      position: { x: 100, y: 100 },
    },
    {
      id: "icon-0",
      position: {
        x: 0,
        y: 110,
      },
      data: {
        icon: "athena",
        width: 50,
        height: 50,
      },
      type: "icon",
    },
  ];
  const edges = [
    { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
    { id: "1-icon-0", source: "1", target: "icon-0", type: "step" },
  ];
  return (
    <div>
      {/* <h1 class="text-3xl font-bold underline">Hello world 12!</h1>
      <Button />
      <AWS />
      <GCPCertificateManager width={100} height={100} /> */}
      {/* <div style={{ height: "100%", width: "100%" }}>
        <div className="dndflow">
          <div className="reactflow-wrapper">
            <YadlPreview nodes={nodes} edges={edges} />
          </div>
        </div>
      </div> */}
      <div className="flex flex-row gap-4 w-full">
        <YadlExport width={800} height={900} />
        {/* <YadlExportNewVersion width={400} height={800} style /> */}
      </div>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <YadlPreview nodes={nodes} edges={edges} />
      </div> */}
    </div>
  );
}

export default App;
