import { Component } from "react";
import HOC from "./HocComponent";

class OnchangeCounter extends Component {
  render() {
    const { count, incrementCount, resetCounter } = this.props;
    if (count < 30) {
      return (
        <>
          <input type="text" onChange={incrementCount} />
          <p>onchange event Count {count}</p>
        </>
      );
    } else {
      return (
        <p>
          {" "}
          Limit Excceded Please{" "}
          <button onClick={resetCounter}> Reset the Count</button>
        </p>
      );
    }
  }
}
export default HOC(OnchangeCounter);
