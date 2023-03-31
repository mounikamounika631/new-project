import React from 'react'

function Javacoding() {
    let url="https://www.programiz.com/java-programming/examples";
    let url1="https://www.programiz.com/java-programming/online-compiler/";
  return (
    <div>
         <h4 style={{color:"green"}}> Welcome to Java Coding</h4>
<br/>
      <h6> Let's start from basics</h6>
<p><strong> For Basic Questions and answers of Java</strong> </p>
<p><strong>click below link</strong> </p>
<a href={url}>click this  link for Questions and answers of java</a>
<br/>
<br/>
<br/>
<br/>
<p> For Practicing Online Compiler is Available</p>
<a href={url1}>click this  link for Practicing Java</a>
    </div>
  )
}

export default Javacoding
