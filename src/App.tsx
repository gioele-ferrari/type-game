import { useState, useEffect } from 'react'
import KeyListener from './components/KeyListener'
import WordBox from './components/WordBox';
import wordToGuess from './WordGuess';

function App() {
  const [activeWord, setActiveWord] = useState("");
  const [goalWord, setGoalWord] = useState("inizio");
  const validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // Ogni volta che l'utente inserisce la parola corretta, impostiamo una nuova
  useEffect(() => {
    if(activeWord == goalWord) {
      setGoalWord(wordToGuess[Math.floor(Math.random() * wordToGuess.length)])
      setActiveWord("");
    }
  }, [activeWord, goalWord])

  // Controlliamo il key press dell'utente
  const keyPressHandler: (key: string) => void = (key) => {
    if (validCharacters.includes(key)) {
      setActiveWord((prevWord) => prevWord.concat(key));
    }
    else if(key == "Backspace") {
      setActiveWord((prevWord) => prevWord.substring(0, prevWord.length - 1));
    }  
  };

  return (
    <div className='app'>
      <KeyListener onKeyPress={keyPressHandler}></KeyListener>
      <h1>{goalWord}</h1>
      <WordBox displayText={activeWord}></WordBox>      
    </div>
  )
}

export default App
