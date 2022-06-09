import React from "react";

export function Header(props) {
  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        color: "white",
        backgroundImage: `url('https://wallpaperaccess.com/full/1429585.jpg')`,
      }}
    >
      <img
        className="App-logo"
        style={{ borderRadius: "5px", width: "150px", height: "150px" }}
        alt="icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
      ></img>
      <div>
        <h1>PokeMon Memory Card Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          color: "black",
          width: "180px",
          height: "150px",
          borderRadius: "5px",
        }}
      >
        <p>Max Score: {props.maxScore}</p>
        <p>Best Score: {props.bestScore}</p>
        <p>Current Score: {props.scoreboard}</p>
      </div>
    </header>
  );
}
