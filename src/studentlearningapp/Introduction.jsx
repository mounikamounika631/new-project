import React from 'react'

function Introduction() {
    let url="https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro";
  return (
    <div>
      <h4>Introduction to Programming Language</h4>
      <p>
      <h6>What is programming?</h6>
Programming is writing computer code to create a program, to solve a problem. Programs are created to implement algorithms. Algorithms can be represented as pseudocode or a flowchart, and programming is the translation of these into a computer program.
<br/>
To tell a computer to do something, a program must be written to tell it exactly what to do and how to do it. If an algorithm has been designed, the computer program will follow this algorithm, step-by-step, which will tell the computer exactly what it should do.
      </p>
      <p>
        <h6>What is a programming language?</h6>
        A programming language is an artificial language that a computer understands. The language is made up of series of statements that fit together to form instructions. These instructions tell a computer what to do.<br/>
        There are many different programming languages, some more complicated and complex than others. Among the most popular languages are:
<br/>
<p>Click the below  link to read more:</p> <a href={url}>click this  link for refering more data in google</a>
      </p>
    </div>
  )
}

export default Introduction
