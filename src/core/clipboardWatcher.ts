declare const Neutralino: any;
let lastClipboardContent: string | null = null; //tracking last clipboard content

async function checkClipboard() {
    try {
        const currentContent = await Neutralino.clipboard.readText();
        if (currentContent !== lastClipboardContent) {
            lastClipboardContent = currentContent;
            console.log('Nuovo contenuto copiato:', currentContent);
        }
    } catch (error) {
        console.error('Error accessing clipboard:', error);
    }
}

export function startWatcher(): void {
  // Poll clipboard every second
  setInterval(checkClipboard, 1000);
  
  // Initial check
  checkClipboard();
  
  console.log('Clipboard watcher started!');
}



