import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const UpCase = () => {
    var newText = text.toUpperCase();
    console.log("Convert To UpperCase Clicked " + text);
    setText(newText);
    props.showAlert("Text Converted To UpperCase","success")
  };

  const LoCase = () => {
    var newText = text.toLowerCase();
    console.log("Convert To UpperCase Clicked " + text);
    setText(newText);
    props.showAlert("Text Converted to Lower Case","success")
  };

  const onChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const Replace = () => {
    var newText = text.replace("mani", "genius");
    setText(newText);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChange}
            id="myBox"
            rows="8"
            style={
              { backgroundColor: props.mode === "dark" ? "#272158" : "white",
            color:props.mode === 'dark'?'white':'black'
            }
              
            }
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={LoCase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary" onClick={Replace}>
          Replace mani With genius
        </button>
      </div>

      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Text Summary</h2>
        <p>
          words:- {text.split(" ").length} and letters {text.length}
        </p>
        <p>Average Time : {0.004 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter Something for preview"}</p>
      </div>
    </>
  );
}
