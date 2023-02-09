import React, { Component } from 'react'
import Errorpage from './Errorpage';

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={error:null}

    }

    componentDidCatch(error){
        this.setState({error:error})
    }
  render() {
    if(this.state.error)
    {
        return(<Errorpage />)
    }
    return (
     this.props.children
    )
  }
}
