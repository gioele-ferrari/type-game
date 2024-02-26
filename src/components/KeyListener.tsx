import { useEffect } from "react";

// Passiamo onKeyPress che è una funzione a cui si passa una key di tipo string e ritorna void
function KeyListener({ onKeyPress } : { onKeyPress: (key: string) => void }) {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            onKeyPress(event.key);
        }

        window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress)
      }
    }, []);

    return null;
};

export default KeyListener;