

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            hasError:false,
            error:"",
            errorinfo:""
        }
    }

    static getDerivedStateFromError(error){
        console.log(error)
        return{ hasError:true}
    }

    componentDidCatch(error,errorinfo)
    {
        
    }



  render() {
    if(this.state.hasError)
    {
        return(
            <>
            <h1>Something went wrong</h1>
            <h1>Something went wrong</h1>
            <h1>Something went wrong</h1>
            <h1>Something went wrong</h1>
            </>
        )
    }
    return this.props.children;
  }
}
