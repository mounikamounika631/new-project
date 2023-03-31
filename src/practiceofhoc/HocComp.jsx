import React, { Component } from 'react'


const HOC=(OriginalComponent)=>{
 class HocComp extends Component {
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }

    increment=()=>
    {
        this.setState((prevState)=>
        {
            return{count:prevState.count+1};
        });
    };
    resetCounter=()=>
    {
        this.setState({count:0});
    };
  render() {
    return (
      <div>
       <OriginalComponent 
       count={this.state.count}
       increment={this.increment}
       resetCounter={this.resetCounter}
        /> 
      </div>
    )
  }
}

return HocComp;
};
export default HOC;
