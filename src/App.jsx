import "./App.css";
import Rate from "./Components/Rate/Rate";
import { useState } from "react";

function App() {
  const [rate, setRate] = useState(0);
  return (
    <>
      <Rate rate={rate} setRate={setRate} />
    </>
  );
}

export default App;
