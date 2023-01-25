import React, { Component, useState } from 'react';
import { render } from "react-dom";
import Modal from "./lib";

const App = () => {

  const [open, setOpen] = useState(false);

  const toggleState = () => {
    setOpen(!open)
  }
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1  style={{fontFamily:"monospace"}}
      >Welcome To Modal Component Lib</h1>
      <button
        style={{
          backgroundColor: "green",
          border: "none",
          color: "white",
          width: "150px",
          height: "30px",
          textTransform: "uppercase",
          wordSpacing: "5px",
          fontSize: "14px",
          cursor: "pointer"
        }}
        onClick={toggleState}>Open Modal</button>
      <Modal
        open={open}
        onCloseClicked={toggleState}
        onBackDropClicked={toggleState}
      ><h1 style={{fontFamily:"monospace"}}>🎊 Hello There 🎊</h1>
      <div style={{textAlign:"center"}}> 
        <img height="300px" src='https://i.giphy.com/media/eNAsjO55tPbgaor7ma/200w.webp' />
      </div>
      </Modal>
    </div>
  )
}


render(<App />, document.getElementById("root"));
