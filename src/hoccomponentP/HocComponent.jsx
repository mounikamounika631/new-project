import React, { Component } from "react";
const HOC = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    resetCounter = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          resetCounter={this.resetCounter}
        />
      );
    }
  }
  return NewComponent;
};
export default HOC;
