import './App.css';

function Keyboard() {
  let QwertyArr = [
    { letter: 'Q', guessed: false },
    { letter: 'W', guessed: false },
    { letter: 'E', guessed: false },
    { letter: 'R', guessed: false },
    { letter: 'T', guessed: false },
    { letter: 'Y', guessed: false },
    { letter: 'U', guessed: false },
    { letter: 'I', guessed: false },
    { letter: 'O', guessed: false },
    { letter: 'P', guessed: false },
    { letter: 'A', guessed: false },
    { letter: 'S', guessed: false },
    { letter: 'D', guessed: false },
    { letter: 'F', guessed: false },
    { letter: 'G', guessed: false },
    { letter: 'H', guessed: false },
    { letter: 'J', guessed: false },
    { letter: 'K', guessed: false },
    { letter: 'L', guessed: false },
    { letter: 'Z', guessed: false },
    { letter: 'X', guessed: false },
    { letter: 'C', guessed: false },
    { letter: 'V', guessed: false },
    { letter: 'B', guessed: false },
    { letter: 'N', guessed: false },
    { letter: 'M', guessed: false }
  ];

  const renderKeyboard = () => {
    //Displays the QWERTY keyboard layout in 3 rows
    return <div>
      <div className="keyboard-row">{QwertyArr.slice(0, 10).map((keyObj, index) => {
      return <div className="keyboard-letter" key={index}> {keyObj.letter} </div>;
    })}</div>
          <div className="keyboard-row">{QwertyArr.slice(10, 19).map((keyObj, index) => {
      return <div className="keyboard-letter" key={index}> {keyObj.letter} </div>;
    })}</div>
          <div className="keyboard-row">{QwertyArr.slice(19, 26).map((keyObj, index) => {
      return <div className="keyboard-letter" key={index}> {keyObj.letter} </div>;
    })}</div>
    </div>
  };
  return (
    <div className="Keyboard">
      {renderKeyboard()}
    </div>
  );
}

export default Keyboard;