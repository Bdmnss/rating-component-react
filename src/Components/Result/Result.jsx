import "./result.css";
import thankYouImg from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="result-div">
      <div className="image-div">
        <img src={thankYouImg} alt="thank you image" />
      </div>
      <div className="selected-rate-div">You selected {rate} out of 5</div>
      <div className="text-div">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
