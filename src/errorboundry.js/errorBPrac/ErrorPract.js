import React, { Component } from 'react'

export default class ErrorPract extends Component {
    constructor(props){
        super(props);
        this.state={error:null}
    }

    componentDidCatch(error)
    {
        this.setState({error:error})
    }
    
  render() {

    if(this.state.error)
    {
        return(<h1> 404 error page not found</h1>)
    }    
    
    return (
     this.props.children
    )
    
  }
}
