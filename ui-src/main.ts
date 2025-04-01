import "./index.css";
import App from "./App.svelte";
import { ListenToFigma } from "./modules/FigmaUtilities";
import { mount } from "svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});
onmessage = (e: MessageEvent) => ListenToFigma(e);

export default app;