import React from 'react'

function Prims() {

  let url="https://www.javatpoint.com/prim-algorithm"
  return (
    <div>
     
     <h4>Prim's Algorithm</h4>
     <p>Prim's Algorithm is a greedy algorithm that is used to find the minimum spanning tree from a graph. Prim's algorithm finds the subset of edges that includes every vertex of the graph such that the sum of the weights of the edges can be minimized.</p>
    <br/>
    <p>Prim's algorithm starts with the single node and explores all the adjacent nodes with all the connecting edges at every step. The edges with the minimal weights causing no cycles in the graph got selected.</p>
    <h4>How does the prim's algorithm work?</h4>
    Prim's algorithm is a greedy algorithm that starts from one vertex and continue to add the edges with the smallest weight until the goal is reached. The steps to implement the prim's algorithm are given as follows -
    <br/>
    <p>First, we have to initialize an MST with the randomly chosen vertex</p>
    <p>Now, we have to find all the edges that connect the tree in the above step with the new vertices. From the edges found, select the minimum edge and add it to the tree.</p>

    <p>Repeat step 2 until the minimum spanning tree is formed.</p>
    <br/>
    <a href={url}>click this  link for refering more data in google</a>
    </div>
  )
}

export default Prims
