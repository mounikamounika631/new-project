import React, { Component } from "react";
import HOC from "./HocComponent";

class OnhoverCounter extends Component {
  
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        {this.props.name}
        Hoverd on button {count}
      </h2>
    );
  }
}
export default HOC(OnhoverCounter);
