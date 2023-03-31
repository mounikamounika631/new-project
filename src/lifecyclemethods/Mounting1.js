import React, { Component } from "react";

export default class Mounting1 extends Component {
  
  static getDerivedStateFromProps(props, state) {
    console.log("mounting 1 get derived from props invoked");
    console.log(state);
    console.log(props);
    return null;
  }

  componentDidMount() {
    console.log("Mounting 1 componentDidMount Invoked");
  }
  render() {
    console.log("Mounting 1 render method is invoked");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { 
      name: "Mounika",
    };
    console.log("Mounting 1 constructor is invoked...");
  }
}
