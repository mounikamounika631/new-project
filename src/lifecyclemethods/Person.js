import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name2: "Shubham",
    };
    console.log("constructor is called");
  }
  changeState = () => {
    this.setState({
      name2: "Das",
    });
    console.log("button clicked");
  };
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called...");
    console.log(props);
    console.log(state);
    return null;
  }
  shouldComponentUpdate(nextState, nextProps) {
    console.log("shouldComponentUpdate is called...");
    console.log(nextProps);
    console.log(nextState);
    return false;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate is called...");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnappedBeforeUpdate is called...");
    console.log(prevProps);
    console.log(prevState);
    return "Hello";
  }
  render() {
    console.log("Render is called");
    return (
      <div>
        <h1> {this.state.name2}</h1>
        <h1> {this.props.city}</h1>
        <button onClick={this.changeState}>CLICK ME</button>
      </div>
    );
  }
}
