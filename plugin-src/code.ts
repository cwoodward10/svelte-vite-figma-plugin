import { CreateMessage } from "./lib/CreateMessage";


figma.showUI(__html__);

figma.ui.on("message", (msg) => {
  if (msg === "hello") {
    let message = CreateMessage(msg);
    figma.notify(message);
  }
  if (msg === "close") {
    figma.closePlugin();
  }
});