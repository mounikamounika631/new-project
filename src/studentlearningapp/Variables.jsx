import { Box } from '@mui/system'
import React from 'react'

function Variables() {
  let url="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:intro-variables/v/what-is-a-variable"
  return (
    <div>
      <Box sx={{}}>
        <h4>Variables</h4>
      A variable is any entity that can take on different values. OK, so what does that mean? Anything that can vary can be considered a variable. For instance, age can be considered a variable because age can take different values for different people or for the same person at different times.
     <br/>
     <br/>
     <h5>Assigning Value to Variables</h5>
     Naming variables is known as one of the most difficult tasks in computer programming. When you are naming variables, think hard about the names. Try your best to make sure that the name you assign your variable is accurately descriptive and understandable to another reader. Sometimes that other reader is yourself when you revisit a program that you wrote months or even years earlier.<br/>
     <br/>
     For Better Learning or watching videos  please click below link
     <br/>
     <br/>
     <a href={url}>Variables content in Google</a>
     
      </Box>
    </div>
  )
}

export default Variables
