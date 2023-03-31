import { Box } from '@mui/system'
import React from 'react'

function Java1() {
  let url="https://www.javatpoint.com/java-tutorial"
  return (
    <div>
      <Box sx={{}}>
            <h4>Java</h4>
            <p>One of the most widely used programming languages, Java is used as the server-side language for most back-end development projects, including those involving big data and Android development. Java is also commonly used for desktop computing, other mobile computing, games, and numerical computing.</p>
      <h4>Why Do Software Developers Use Java?</h4>
      <p>The portability of Java contributes to its wide use and popularity, but there are other reasons why software developers continue to choose Java.</p><br/>
      <p>Object-oriented languages make complex problems easier to solve and provide greater modularity. This is a natural and pragmatic approach for software design. Java objects encapsulate data and behavior so that code can be reused, which makes testing and troubleshooting easier.</p><br/>
      <a href={url}>click this  link for refering more data in google</a>
      </Box>
    </div>
  )
}

export default Java1
