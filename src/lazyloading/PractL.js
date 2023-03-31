import React, { lazy, Suspense } from 'react'
import About from './About'
// import Home from './Home'

const Homel=lazy(()=>import('./Home'))

function PractL() {
  return (
    <div>
      <h1> first rendering componenet</h1>
      <About />
      <Suspense fallback={<h1> please wait a moment..............</h1>}>
      < Homel/>
      </Suspense>
    </div>
  )
}

export default PractL
