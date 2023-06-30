import { CreateMessage } from "./lib/CreateMessage";
import { PostToUi } from "./lib/FigmaHelpers";


figma.showUI(__html__);

figma.on('selectionchange', () => {
  PostToUi('SelectionChanged', figma.currentPage.selection);
})

figma.ui.on("message", (msg) => {
  if (msg === "Hello") {
    let message = CreateMessage(msg);
    figma.notify(message);
    PostToUi('HelloBack');
  }
  if (msg === "close") {
    figma.closePlugin();
  }
});