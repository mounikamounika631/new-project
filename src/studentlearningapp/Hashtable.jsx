import React from 'react'

function Hashtable() {
  let url="https://www.javatpoint.com/hash-table"
  return (
    <div>
      <h4> Hash Table</h4>
      <p>A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.</p>
   <h5>What is a hash table used for?</h5>
   <p>A hash table is a data structure that you can use to store data in key-value format with direct access to its items in constant time. Hash tables are said to be associative, which means that for each key, data occurs at most once.</p>
    <h5>Why is it called a hash table?</h5>
    <p>hash tables are called that way because of using hash code and it's related to "cut food". Think of it like this - you take your nice pretty object, like a fruit, then hash it so that it starts looking just like anything else - just a number - there's no more structure in it anymore.14</p>
    <h5>What is key-value in HashTable?</h5>
    <p>A hash table is a type of data structure that stores key-value pairs. The key is sent to a hash function that performs arithmetic operations on it. The result (commonly called the hash value or hash) is the index of the key-value pair in the hash table.</p>
    <a href={url}>click this  link for refering more data in google</a>
    </div>
  )
}

export default Hashtable
