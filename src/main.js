// import clipboard watcher
import { startWatcher } from './core/clipboardWatcher';
/**
 * Applicaton initialization function
 */
async function init() {
    try {
        // 1. Inizializza Neutralino
        await Neutralino.init();
        console.log('Neutralino inizialized!');
        // 2. Registra eventi dell'applicazione
        // Gestisce la chiusura della finestra
        Neutralino.events.on('windowClose', () => {
            Neutralino.app.exit();
        });
        // 3. Avvia il clipboard watcher
        startWatcher();
        console.log('Clipboard watcher avviato!');
        // 4. Log di conferma
        console.log('App kop-i inizializzata con successo!');
    }
    catch (error) {
        console.error('Errore durante inizializzazione:', error);
    }
}
// init when DOME is loaded
init();
//# sourceMappingURL=main.js.map