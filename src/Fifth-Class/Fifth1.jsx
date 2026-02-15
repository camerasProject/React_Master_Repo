import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fifth1 = () => {
    // Where do we use useEffect()?
    // Mostly in api fetching.

    const[value,setValue]=useState(0)

    let url="https://dummyjson.com/products"

    async function dataFetch(){
        let data=await axios.get(url);
        console.log(data);
    }
    // Use case 1:
    useEffect(()=>{
        dataFetch()
    })

    // Use Case 2:
    useEffect(()=>{
        dataFetch()
    },[])
  return (
    <div>
        <button onClick={()=>{setValue(value+1)}}>+</button>
    </div>
  )
}

export default Fifth1
