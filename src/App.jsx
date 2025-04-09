import "./App.css";
import "./animate.min.css";
import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
// import "yadl-ui/dist/yadl-ui.css";
// import { YadlPreview } from "yadl-ui";
// import YadlExport from "./components/ui/YadlExport";
// import YadlIcons from "./YadlIcons"
import { Preview } from "yadl-preview";

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
        y: 180,
      },
      data: {
        icon: "skillIconActivityPub",
        category: "skill",
      },
      type: "icon",
    },
    {
      id: "icon-1",
      position: {
        x: 50,
        y: 180,
      },
      data: {
        icon: "aWSAppIntegrationAPIGateway",
        category: "aws",
      },
      type: "icon",
    },
    {
      id: "icon-2",
      position: {
        x: 100,
        y: 180,
      },
      data: {
        icon: "azureAiMachineLearningBatchAI",
        category: "azure",
      },
      type: "icon",
    },
    {
      id: "icon-3",
      position: {
        x: 150,
        y: 180,
      },
      data: {
        icon: "gCPAdministration",
        category: "gcp",
      },
      type: "icon",
    },
    {
      id: "icon-4",
      position: {
        x: 150,
        y: 180,
      },
      data: {
        icon: "skillIconAbleton",
        category: "skill",
      },
      type: "icon",
    },
    {
      id: "icon-5",
      position: {
        x: 200,
        y: 180,
      },
      data: {
        icon: "themeisle1",
        category: "themeisle",
      },
      type: "icon",
    },
    {
      id: "icon-6",
      position: {
        x: 250,
        y: 180,
      },
      data: {
        icon: "undrawPhoneCall",
        category: "undraw",
      },
      type: "icon",
    },
    {
      id: "box-12",
      position: {
        x: 300,
        y: -100,
      },
      data: {
        name: "Box 1",
        component: "box1",
        props: {
          height: 284,
          width: 256,
          title: "UI / UX Creative Desing",
          caption:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
        },
      },
      type: "box",
    },
    {
      id: "text-1",
      position: {
        x: 0,
        y: -20,
      },
      data: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        classes:
          "mx-auto break-words truncate bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent",
        component: "Text",
        props: {
          height: 284,
          width: 256,
        },
      },
      type: "text",
    },
    {
      id: "text-2",
      position: {
        x: 0,
        y: -40,
      },
      data: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        classes:
          "mx-auto break-words truncate bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent",
        component: "Text",
        fontFamily: "Segoe UI Symbol",
        props: {
          height: 284,
          width: 256,
        },
      },
      type: "text",
    },
    {
      id: "text-3",
      position: {
        x: 0,
        y: -60,
      },
      data: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        classes:
          "mx-auto break-words truncate bg-gradient-to-r from-violet-600  via-red-500 to-indigo-600 bg-clip-text text-transparent",
        component: "Text",
        fontFamily: "Segoe UI Symbol",
        props: {
          height: 284,
          width: 256,
        },
      },
      type: "text",
    },
    {
      id: "text-4",
      position: {
        x: 0,
        y: -80,
      },
      data: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        classes:
          "border-indigo-600 mx-auto break-words truncate bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent",
        component: "Text",
        fontFamily: "Segoe UI Symbol",
        props: {
          height: 284,
          width: 256,
        },
      },
      type: "text",
    },
  ];
  const edges = [
    { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
    { id: "1-icon-0", source: "1", target: "icon-0", type: "step" },
  ];

  // let iconNamePresent = AwsIconNames[icon] != undefined;
  //     if (iconNamePresent) {
  //       console.error(`AWS Present = ${iconNamePresent}`)
  //       // @ts-ignore
  //       // Icon = AWSIcons[AwsIconNames[icon].icon] ?? null;
  //     }
  return (
    <div>
      {/* <YadlIcons /> */}
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
      {/* <div className="flex flex-row gap-4 w-full">
        <YadlExport width={800} height={900} />
      </div> */}
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <YadlPreview nodes={nodes} edges={edges} />
      </div> */}
      <div style={{ height: "100vh" }}>
        <Preview nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;
