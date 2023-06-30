import "./index.css";
import App from "./App.svelte";
import { ListenToFigma } from "./modules/FigmaUtilities";

const app = new App({
  target: document.getElementById("app")!,
});
onmessage = (e: MessageEvent) => ListenToFigma(e);

export default app;