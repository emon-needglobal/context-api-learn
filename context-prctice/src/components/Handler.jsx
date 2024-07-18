import React, { useState } from "react";

function Handler() {
  const [value, SetValue] = useState("");
  const [count, setCount] = useState(0);
  const [isdisabled, setDisabled] = useState(false);

  const handleincrementCount = () => {
    // setCount(count=>count+1)
    // setCount(count=>count+1)
    //  setCount(count=>count+1)
    if (count === 5) {
      return setDisabled(!isdisabled);
    }
    setCount(count + 1);
  };

  const handleDecrementCount = () => {

    if (count==-5){
      return setDisabled(!isdisabled)
    }
    setCount(count - 1);
  };

  return (
    <>
      <input
        type="text"
        placeholder="input here"
        onChange={(e) => SetValue(e.target.value)}
      />

      <br />
      {value}
      <br />
      <h1>Count is {count}</h1>
      <button onClick={handleincrementCount} disabled={isdisabled}>
        +
      </button>
      <button style={{ marginLeft: "10px" }} onClick={handleDecrementCount}>
        -
      </button>
    </>
  );
}

export default Handler;
