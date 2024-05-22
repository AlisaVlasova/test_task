import { Editor } from "../pages/editor";
import { Providers } from "./providers";

export function App() {
  return (
    <div className="App">
      <Providers>
        <Editor />
      </Providers>
    </div>
  );
}
