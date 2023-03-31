import { Box } from '@mui/system'
import React from 'react'

function ConditionalStatemnets() {
  let url="https://www.programiz.com/java-programming/if-else-statement";
  return (
    <div>
        <Box sx={{}}>
      <h4> Conditional Statements</h4>
In this tutorial, you will learn about control flow statements using Java if and if...else statements with the help of examples.
<br/>
In programming, we use the if..else statement to run a block of code among more than one alternatives.
<br/>
For example, assigning grades (A, B, C) based on the percentage obtained by a student.
<br/>
if the percentage is above 90, assign grade A<br/>
if the percentage is above 75, assign grade B<br/>
if the percentage is above 65, assign grade C
<br/>
<strong>Note:</strong> <br/>
Java provides a special operator called ternary operator, which is a kind of shorthand notation of if...else...if statement. To learn about the ternary operator, visit Java Ternary Operator.
<p>Click the below  link to read more:</p> <a href={url}>click this  link for refering more data in google</a>
     
      </Box>
    </div>
  )
}

export default ConditionalStatemnets
