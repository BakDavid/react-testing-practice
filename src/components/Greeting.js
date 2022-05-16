import React from "react";
import { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const changeTextHanlder = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHanlder}>Change text!</button>
    </div>
  );
}

export default Greeting;
