import { Box } from '@mui/system'
import React from 'react'

function Python1() {
  let url="https://www.w3schools.com/python/"
  return (
    <div sx={{Width:0}}>
      
     <h4> Python For Beginners</h4>
     <p>Welcome! Are you completely new to programming? If not then we presume you will be looking for information about why and how to get started with Python. Fortunately an experienced programmer in any programming language (whatever it may be) can pick up Python very quickly. It's also easy for beginners to use and learn, so jump in!</p>
     <h4>Installing</h4>
     <p>Installing Python is generally easy, and nowadays many Linux and UNIX distributions include a recent Python. Even some Windows computers (notably those from HP) now come with Python already installed. If you do need to install Python and aren't confident about the task you can find a few notes on the BeginnersGuide/Download wiki page, but installation is unremarkable on most platforms.</p>
    <h4>Main use of python</h4>
    <p>Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances.</p>
    
    <br/>
    <a href={url}>click this  link for refering more data in google</a>

    </div>
    
  )
}

export default Python1
