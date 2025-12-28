import './App.css';

function WordGuess({ wordToGuess, blankWordArr, setBlankWordArr,
setWordToGuess }) {

  const displayBlankWord = () => {
    for (let i = 0; i < wordToGuess.length; i++) {
     blankWordArr.push(<div className="blank-letter" value="">_</div>);
    }
    return <div className="blank-letter-row">{blankWordArr}</div>
  }
  return (
    <div className="WordGuess">
      <div className="blank-letter-roww">{displayBlankWord()}</div>
    </div>
  );
}

export default WordGuess;