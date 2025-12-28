import { useState } from "react";

import './App.css';
import TitleBar from './TitleBar.jsx'
import Gallow from './Gallow.jsx'
import WordGuess from './WordGuess.jsx'
import Keyboard from './Keyboard.jsx'
function App() {
  const [blankWordArr, setBlankWordArr] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("hangman");
  return (
    <div className="App">
      <TitleBar />
      <Gallow />
      <WordGuess
        wordToGuess={wordToGuess}
        setWordToGuess={setWordToGuess}
        blankWordArr={blankWordArr}
        setBlankWordArr={setBlankWordArr}
        />
      <Keyboard
        wordToGuess={wordToGuess}
        setWordToGuess={setWordToGuess}
        blankWordArr={blankWordArr}
        setBlankWordArr={setBlankWordArr}
      />
    </div>
  );
}

export default App;
