import { useState, useEffect } from 'react'
import KeyListener from './components/KeyListener'
import WordBox from './components/WordBox';
import wordToGuess from './WordGuess';
import Footer from './components/Footer';

function App() {
  const [activeWord, setActiveWord] = useState("");
  const [goalWord, setGoalWord] = useState("inizio");
  const [score, setScore] = useState(0);

  const validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // Ogni volta che l'utente inserisce la parola corretta, impostiamo una nuova
  useEffect(() => {
    if(activeWord.length == goalWord.length) {
      if(activeWord == goalWord) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setScore(0);
      }

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
      <p className='default-text dark-text'>Score: {score}</p>
      <p className='default-text dark-text'>Type the word below</p>
      <p className='default-text'>{goalWord}</p>
      <WordBox displayText={activeWord}></WordBox>
      <hr className='divider'></hr>
      <Footer author='Gioele Ferrari'></Footer>
    </div>
  )
}

export default App
