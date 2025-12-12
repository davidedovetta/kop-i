let lastClipboardContent = null; //tracking last clipboard content
async function checkClipboard() {
    try {
        const currentContent = await Neutralino.os.getClipboard();
        if (currentContent !== lastClipboardContent) {
            lastClipboardContent = currentContent;
            Neutralino.events.emit('clipboardChanged', currentContent);
        }
    }
    catch (error) {
        console.error('Error accessing clipboard:', error);
    }
}
export function startWatcher() {
    // Poll clipboard every second
    setInterval(checkClipboard, 1000);
    // Initial check
    checkClipboard();
    console.log('Clipboard watcher started!');
}
//# sourceMappingURL=clipboardWatcher.js.map