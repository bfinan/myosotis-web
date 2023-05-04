import Link from 'next/link';
import React from 'react';
import {useState} from 'react';

function Square({value, onSquareClick}) {
  function handleClick(){
  }
  return ( 
    <button 
    className="square"
    onClick={onSquareClick}
    >
      {value}
    </button>
  )
}
  
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    return (
      <>
      <div>
        <div className="board-row">
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
        </div>
        <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
        </div>
      </div>
      </>
    );
}
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>

          <div>
          <br></br>
          <iframe width="200" height="100" src="https://www.youtube.com/embed/T9lGlbTMOXg?start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        
      );
    }
  }
  

export default function TicTacToe() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <Game></Game>
      </h2>
    </>
  );
}