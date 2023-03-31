import { Box } from '@mui/system'
import React from 'react'

function React1() {
  let url="https://legacy.reactjs.org/docs/getting-started.html"
  return (
    <div>
      <Box sx={{}}>
        <h4>React</h4>
        <p>React is a JavaScript library for building user interfaces.</p>
      <h4>What is React and why we are using it?</h4>
      <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
      <h4>Is React a front-end or backend?</h4>
      <p>React is a front-end JavaScript library. React is capable of making API calls (sending the request to the backend), which deal with the data. React cannot process the database or the data source itself.</p>
      <br/>
      <h5>Can I use React instead of HTML?</h5>
      <p>What makes React such a desirable library to learn is that it doesn't replace HTML. It takes advantage of HTML's popularity and strength as the most popular programming language, by letting you use a very similar syntax to HTML to build interfaces and add dynamic features to it using JavaScript</p>
      <br/>
      <a href={url}>click this  link for refering more data in google</a>
      </Box>
    </div>
  )
}

export default React1
