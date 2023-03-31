import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

function UseMemo1() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);
  let incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  let incrementCounter2 = () => {
    setCounter2(counter2 + 10);
  };

  let isEven = useMemo(() => {
    console.log("is even got executed");
    let i = 0;
    while (i < 5000000) i++;
    return counter1 % 2 === 0;
  });

  
  return (
    <div>
      <h1>counter1 value is: {counter1}</h1>
      <h1>counter2 value is: {counter2}</h1>
      <h1>the value is : {isEven ? "even" : "odd"}</h1>
      <Button
        onClick={() => {
          incrementCounter1();
        }}
      >
        increment counter1
      </Button>
      <Button
        onClick={() => {
          incrementCounter2();
        }}
      >
        increment counter2
      </Button>
    </div>
  );
}

export default UseMemo1;