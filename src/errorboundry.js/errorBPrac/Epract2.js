import React, { Component } from 'react'

export default class Epract2 extends Component {

    constructor(props)
    {
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
        return(<h1> page is irresponsive</h1>)
    }
    return (
      this.props.children
    )
  }
}
