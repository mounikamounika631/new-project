import React, { Component } from 'react'
import HOC from "./HocComp"
 class OnChangehover extends Component {
  render() {
   
    const{count,increment,resetCounter} = this.props;
    if(count<30){
    return (
      <>
        <input type={"text"} onChange={increment}></input>
        <h2> on change counter:{count}</h2>
      </>
    )
    }
    else{
       return( 
        <p>limit exceeded
        <button onClick={resetCounter}> reset the count </button></p>
        )

    }
  }
}
export default HOC(OnChangehover);