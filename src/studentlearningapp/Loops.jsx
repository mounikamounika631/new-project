import { Box } from '@mui/system'
import React from 'react'

function Loops() {
  let url="https://en.wikipedia.org/wiki/LOOP_(programming_language)"
  return (
    <div>
      <Box sx={{}}>
        <h5>Loops</h5>
      In computer programming, a loop is a sequence of instruction s that is continually repeated until a certain condition is reached. Typically, a certain process is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter has reached a prescribed number.
      <h6> There are four types of loops</h6>
<p><strong>for</strong> − loops through a block of code a specified number of times.<br/>
<strong>while</strong> − loops through a block of code if and as long as a specified condition is true.
<br/>
<strong>foreach</strong> − loops through a block of code for each element in an array.</p>
      
<a href={url}>click this  link for refering more data in google</a>
      </Box>
    </div>
  )
}

export default Loops
