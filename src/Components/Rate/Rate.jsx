import React from "react";
import starImg from "/images/icon-star.svg";
import "./rate.css";

export default function Rate({ rate, setRate, setSubmit }) {
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
          <button
            key={item}
            onClick={() => setRate(item)}
            style={{
              backgroundColor: rate == item ? "#fc7614" : "",
              color: rate == item ? "#ffffff" : "",
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="submit-div">
        <button onClick={() => rate && setSubmit(true)}>SUBMIT</button>
      </div>
    </div>
  );
}
