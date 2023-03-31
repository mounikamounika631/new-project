import React, { Component } from 'react'

export default class Childs extends Component {
    componentWillUnmount(){
        console.log("componentwillunmount is called...")
    }
  render() {
    return (
      <div>
        <h1>Hello I Am Child</h1>
      </div>
    )
  }
}
