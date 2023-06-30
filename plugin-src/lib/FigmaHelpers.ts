export function PostToUi(message: string, data: any = undefined) {
    figma.ui.postMessage({message, data});
}