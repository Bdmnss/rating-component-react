import "./App.css";
import Rate from "./Components/Rate/Rate";
import { useState } from "react";

function App() {
  const [rate, setRate] = useState(0);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <Rate rate={rate} setRate={setRate} setSubmit={setSubmit} />
    </>
  );
}

export default App;
