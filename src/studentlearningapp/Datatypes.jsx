import { Box } from '@mui/system'
import React from 'react'
import ConditionalStatemnets from './ConditionalStatemnets'
import Datatypes1 from './Datatypes1'
import Loops from './Loops'

import Variables from './Variables'

function Datatypes({activeStep}) {
  console.log(activeStep)
  return (
    <div>


      hello
     
      {/* {activeStep===0?<Box sx={{marginTop:10}}>
       
      
      <Datatypes1/>
      </Box>
      :activeStep===1?<Box sx={{marginTop:10}}>
     <ConditionalStatemnets/>
      </Box>:activeStep===2?
      <Variables/>:<Loops/>
      } */}
    </div>
  )
}

export default Datatypes
