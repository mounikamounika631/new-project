import React, { Component } from 'react'
import HOC from './HocComp';

 class OnhoverP extends Component {
  render() {
    const {count,increment}=this.props;
    return (
      
       
        <h2 onMouseOver={increment}> on hover change:{count}</h2>
      
    );
  }
}
export default HOC(OnhoverP);
