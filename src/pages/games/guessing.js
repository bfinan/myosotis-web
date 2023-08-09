import React, {useState} from 'react';
import Link from 'next/link';

function Game(){
    const [targetNumber, setTargetNumber] = useState(45);
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    const checkGuess = () => {
        const parsedGuess = parseInt(guess, 10);
        console.log("parsedguess is " + parsedGuess)
        if (isNaN(parsedGuess)) {
          setResult('Please enter a valid number.');
        } else if (parsedGuess < targetNumber) {
          setResult('Too low');
        } else if (parsedGuess > targetNumber) {
          setResult('Too high');
        } else {
          setResult('Correct!');
        }
      };

    
    return (
        <div className="guesser">
        <h1>Guessing</h1>
        <div>
            <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}></input>
            <button onClick={checkGuess}>Guess!</button>
        </div>
        <p>{result}</p>
        </div>
    );
}

export default function Guessing(){
    return (
        <>
        <Link href="/">Back to home</Link> <br></br>
        <Game></Game>
        </>
    )
}