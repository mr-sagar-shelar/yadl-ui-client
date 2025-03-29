import "./App.css";
import "./animate.min.css";
import "@xyflow/react/dist/style.css";
import { Button, AWS, GCPCertificateManager, Preview } from "yadl-ui";

function App() {
  return (
    <div>
      {/* <h1 class="text-3xl font-bold underline">Hello world 12!</h1>
      <Button />
      <AWS />
      <GCPCertificateManager width={100} height={100} /> */}
      <div style={{ height: "90vh", width: "100%" }}>
        <Preview />
      </div>
    </div>
  );
}

export default App;
