import React from 'react'

function Kruskals() {
  let url="https://www.javatpoint.com/kruskal-algorithm"
  return (
    <div>
      <h4>kruskals</h4>
      <p>Kruskal's algorithm is the concept that is introduced in the graph theory of discrete mathematics. It is used to discover the shortest path between two points in a connected weighted graph. This algorithm converts a given graph into the forest, considering each node as a separate tree.</p>
      <h4>How does Kruskal's algorithm work?</h4>
      <p>In Kruskal's algorithm, we start from edges with the lowest weight and keep adding the edges until the goal is reached. The steps to implement Kruskal's algorithm are listed as follows -</p>
   <p>First, sort all the edges from low weight to high.</p>
   <p>Now, take the edge with the lowest weight and add it to the spanning tree. If the edge to be added creates a cycle, then reject the edge.</p>
   <p>Continue to add the edges until we reach all vertices, and a minimum spanning tree is created.</p>
   <strong>The applications of Kruskal's algorithm are -</strong><br/>
  
    <p>Kruskal's algorithm can be used to layout electrical wiring among cities.</p>
    <p>It can be used to lay down LAN connections.</p>
    <a href={url}>click this  link for refering more data in google</a>
    </div>
  )
}

export default Kruskals
