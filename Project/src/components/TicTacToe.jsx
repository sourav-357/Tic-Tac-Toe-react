import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  // setting some variable as per the useState hook
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  // creating box instance
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box_arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // this function will be called whenever we click on the boxes | num is the index in data array |
  const toggle = (e, num) => {
    // if the system is set to lock --> nothing must work
    if (lock) return 0;

    // if the player2 (even number player)
    if (count % 2 === 0 && data[num] === "") {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "X";
      setCount((count) => count + 1);

      // if the player1 (odd number player)
    } else if (count % 2 != 0 && data[num] === "") {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "O";
      setCount((count) => count + 1);
    }
    checkWin();
  };

  // function to check if any of the person wins
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  // this fynction will be executed once any particular player wins the game
  const won = (winner) => {
    setLock((lock) => (lock = true));
    if (winner === "X") {
      titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}'> won the game!`;
    }
    if (winner === "O") {
      titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}'> won the game!`;
    }
  };

  // this function will be called once the player press reset button
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`;
    box_arr.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>

        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>

        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};
