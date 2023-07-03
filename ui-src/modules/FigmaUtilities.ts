/**
 * Posts a message to Figma using the 'parent.postMessage' function.
 * Documentation here: https://www.figma.com/plugin-docs/creating-ui#sending-a-message-from-the-ui-to-the-plugin-code
 * @param message 
 * @param origin 
 */
export function SendToFigma(message: any, origin = '*') {
    parent.postMessage({ pluginMessage: message}, origin);
}

/**
 * Used with the Message Registry to listen for messages from the Figma Plugin code.
 */
type FigmaListener = {
    Name: string,
    Type: 'Once' | 'Infinite',
    Active: boolean,
    Callback: (name: string, data: any) => void
}

/**
 * A collection of messages (and their associated callback functions) for
 * the app to check through when the Figma plugin code sends a message
 * to the UI.
 */
let FigmaListenerRegistry: FigmaListener[] = [];
export function ListenToFigma(e: MessageEvent) {
    const pluginMessage: {message: string, data: any} = e.data.pluginMessage;

    const listener = FigmaListenerRegistry.find(l => l.Name === pluginMessage.message);
    if (listener == null) {
        console.warn(`Could not find Message Listener with name: ${pluginMessage.message}`);
        return;
    }

    if (listener.Active) {
        listener.Callback(pluginMessage.message, pluginMessage.data);

        if (listener.Type === 'Once') {
            FigmaListenerRegistry = FigmaListenerRegistry.filter(l => l.Name != listener.Name);
        }
    }
}

/**
 * Registers a Figma Listener that will continuously run.
 * @param message 
 * @param callback 
 * @returns 
 */
export function On(message: string, callback: (name: string, data: any) => void) {
    if (FigmaListenerRegistry.map(l => l.Name).includes(message)) {
        console.warn(`Listener registry already includes message named: ${message}`);
        return;
    }

    registerListener(message, 'Infinite', callback);
}

/** Registers a Figma Listener that will run once then become inactive. */
export function Once(message: string, callback: (name: string, data: any) => void) {
    if (FigmaListenerRegistry.map(l => l.Name).includes(message)) {
        console.warn(`Listener registry already includes message named: ${message}`);
        return;
    }

    registerListener(message, 'Once', callback);
}

function registerListener(
    message: string,
    type: 'Once' | 'Infinite',
    callback: (name: string, data: any) => void
) {
    FigmaListenerRegistry.push({
        Name: message,
        Type: type,
        Active: true,
        Callback: callback
    });
}