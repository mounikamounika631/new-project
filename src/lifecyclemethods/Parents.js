import React, { Component } from 'react'
import Childs from './Childs'

export default class Parents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        active:true
         
      }
    }
    changeState=()=>{
        this.setState({
            active:false
        })

    }
    
  render() {
    return (
      <div>
        {/* <Childs/> */}
        {this.state.active ?<Childs/> : <h1>Component deleted</h1>}
        <button onClick={this.changeState}> change state</button>
      </div>
    )
  }
}
