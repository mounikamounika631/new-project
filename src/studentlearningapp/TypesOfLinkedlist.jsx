import React from 'react'

function TypesOfLinkedlist() {
  let url="https://www.programiz.com/dsa/linked-list-operations"
  return (
    <div>
    <h4> Types of linked list Operations</h4>
    <br/>
    <p>These are Different Operations in linked list</p>
    <p><strong>Traversal</strong> - access each element of the linked list</p>
    <p><strong>Insertion</strong> - adds a new element to the linked list</p>
    <p><strong>Deletion</strong> - removes the existing elements</p>
    <p><strong>Search </strong> -  find a node in the linked list</p>
    <p><strong>Sort </strong> -   sort the nodes of the linked list</p>
    <h5> Things to Remember about Linked List</h5>
    <br/>
    <p><strong>head</strong>  points to the first node of the linked list</p>
    <p><strong>next </strong>  pointer of the last node is NULL, so if the  <strong>next</strong>  current node is NULL, we have reached the end of the linked list.</p>
    <a href={url}>click this  link for refering more data in google</a>
    </div>
  )
}

export default TypesOfLinkedlist
