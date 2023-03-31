import React from 'react'

function Demo() {
  let url="https://byjus.com/gate/difference-between-prims-and-kruskal-algorithum/"
  return (
    <div>
     <h4> Difference between Prims and Kruskals</h4>
     <p>Both Prim’s and Kruskal’s algorithms are developed for discovering the minimum spanning tree of a graph. Both the algorithms are popular and follow different steps to solve the same kind of problem.</p>
    <br/>
    <p>The prim’s algorithm selects the root vertex in the beginning and then traverses from vertex to vertex adjacently. On the other hand, Krushal’s algorithm helps in generating the minimum spanning tree, initiating from the smallest weighted edge.</p>
    <h5>Which one is better Prims or Kruskal?</h5>
    <p>The advantage of Prim's algorithm is its complexity, which is better than Kruskal's algorithm. Therefore, Prim's algorithm is helpful when dealing with dense graphs that have lots of edges. However, Prim's algorithm doesn't allow us much control over the chosen edges when multiple edges with the same weight occur</p>
    <a href={url}>For Better understanding click this link</a>
    <br/>
    <br/>
    <h4>Why Kruskal is faster than prims?</h4>
    <p>Prim's algorithm is significantly faster in the limit when you've got a really dense graph with many more edges than vertices. Kruskal performs better in typical situations (sparse graphs) because it uses simpler data structures.</p>
    </div>
  )
}

export default Demo
