import React from "react";
import starImg from "/images/icon-star.svg";
import "./rate.css";

export default function Rate() {
  const buttons = [1, 2, 3, 4, 5];
  return (
    <div className="rate-div">
      <div className="star-div">
        <img src={starImg} alt="star image" />
      </div>
      <div className="text-div">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="buttons">
        {buttons.map((item) => (
          <button>{item}</button>
        ))}
      </div>
      <div className="submit-div">
        <button>SUBMIT</button>
      </div>
    </div>
  );
}
