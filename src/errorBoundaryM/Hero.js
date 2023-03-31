import React from 'react'

function Hero({name}) {


    if(name==='jay')
    {
        throw new Error("THIS is error")
    }
  return (
    <div>{name}</div>
  )
}

export default Hero