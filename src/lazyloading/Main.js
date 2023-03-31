import React, { lazy, Suspense } from 'react'

import About from "./About"
//  import Home from "./Home"
const Home = lazy(()=> import ('./Home.js'))

function Main() {
  return (
    <div>
        <h1>Main Component</h1>
        <About/>
        <Suspense fallback={<h1>Wait loading........</h1>}>
        <Home/>
        </Suspense>
    </div>
  )
}

export default Main