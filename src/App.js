import './App.css';
import TitleBar from './TitleBar.js'
import Gallow from './Gallow.js'
import WordGuess from './WordGuess.js'
import Keyboard from './Keyboard.js'
function App() {
  return (
    <div className="App">
      <TitleBar />
      <Gallow />
      <WordGuess />
      <Keyboard />
    </div>
  );
}

export default App;
