import React, { useState } from "react";

function CalculatorFunction() {
  const [user, setUser] = useState({
    num1: "",
    num2: "",
    result: ""
  });

  const handleNum = (event) => {
    setUser({
      ...user,
      num1: event.target.value
    });
  };
  const handleSum = () => {
    setUser({
      ...user,
      result: parseInt(user.num1) + parseInt(user.num2)
    });
  };
  const handleSub = () => {
    setUser({
      ...user,
      result: parseInt(user.num1) - parseInt(user.num2)
    });
  };
  const handleMulti = () => {
    setUser({
      ...user,
      result: parseInt(user.num1) * parseInt(user.num2)
    });
  };
  const handleDiv = () => {
    setUser({
      ...user,
      result: parseInt(user.num1) / parseInt(user.num2)
    });
  };
  const handleMod = () => {
    setUser({
      ...user,
      result: parseInt(user.num1) % parseInt(user.num2)
    });
  };

  return (
    <div>
      <h1>Simple Calculator(use function)</h1>
      <input type="num" value={user.num1} onChange={handleNum} />
      <input
        type="num"
        value={user.num2}
        onChange={(event) => {
          setUser({
            ...user,
            num2: event.target.value
          });
        }}
      />

      <button onClick={handleSum}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleMulti}>Multi</button>
      <button onClick={handleDiv}>Div</button>
      <button onClick={handleMod}>Mod</button>
      <h1>result={user.result}</h1>
    </div>
  );
}
export default CalculatorFunction;
