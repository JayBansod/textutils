import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState("0");

  let handelOnChange = (event) => {
    let length = event.target.value.length;
    setText(event.target.value);
    setCount(length);
  };

  let handelUpClick = () => {
    let newUpperCase = text.toUpperCase();
    setText(newUpperCase);
  };

  let handelLowerClick = () => {
    let newlowerCase = text.toLowerCase();
    setText(newlowerCase);
  };

  let handelClearrClick = () => {
    setText("");
    setCount("0");
  };
  return (
    <>
      <div className="mb-3 container-fluid">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter text here"
          onChange={handelOnChange}
          value={text}
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary my-3 mx-1"
          onClick={handelUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          type="submit"
          className="btn btn-primary my-3 mx-1"
          onClick={handelLowerClick}
        >
          Convert To LowerCase
        </button>
        <button
          type="submit"
          className="btn btn-primary my-3 mx-1"
          onClick={handelClearrClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container bg-secondary py-3">
        <p>The length is {count}</p>
      </div>
    </>
  );
}
