import React from 'react'

function Linkedlist() {
  let url="https://www.geeksforgeeks.org/what-is-linked-list/"
  return (
    <div >
      <h4>Linkedlist</h4>
      <p>A linked list is a sequence of data structures, which are connected together via links. Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array.</p>
      <h5>Types Of Linked List</h5>
      <strong>Simple Linked List </strong>
      <p>In this type of linked list, one can move or traverse the linked list in only one direction. where the next pointer of each node points to other nodes but the next pointer of the last node points to NULL. It is also called “Singly Linked List”.</p>
      <strong>Doubly Linked List –</strong> 
      <p>In this type of linked list, one can move or traverse the linked list in both directions (Forward and Backward)</p>
     <strong> Circular Linked List </strong>
     <p> In this type of linked list, the last node of the linked list contains the link of the first/head node of the linked list in its next pointer.</p>
    <strong>Doubly Circular Linked List </strong>
    <p>A Doubly Circular linked list or a circular two-way linked list is a more complex type of linked list that contains a pointer to the next as well as the previous node in the sequence. The difference between the doubly linked and circular doubly list is the same as that between a singly linked list and a circular linked list. The circular doubly linked list does not contain null in the previous field of the first node.</p>
    <a href={url}>click this  link for refering more data in google</a>
    </div>
  )
}

export default Linkedlist
