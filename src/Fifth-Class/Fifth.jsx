import React, { useEffect, useState } from 'react'

const Fifth = () => {
    const[value,setValue]=useState(0)
    const[value1,setValue1]=useState(10)

    // useEffect Hook : It is used to handle any side effect(changes) on our browser.
    // Three Types:
    // 1. without dependency : It will run on every re-renders(refresh)
    // 2. with empty array : it will run only once.
    // 3. with any dependency : it will re-render when their is some update in the dependency

    // syntax:
    // useEffect(callback,dependency);

    // Use case 1:
    // without any dependency : will run on very refresh
    // useEffect(()=>{
    //     console.log("Re-render Invoked")
    // })

    // Use case 2:
    // with empty array :will run only singlr time
    // useEffect(()=>{
    //     console.log("UseEffect")
    // },[])

    // Use case 3:
    // with dependency : will run only when their is any change in their dependency.
    useEffect(()=>{
        console.log("useeffect")
    },[value1])

  return (
    <div>
        {value} <br />
      <button onClick={()=>{setValue(value+1)}}>+</button> <br />
        {value1} <br />
      <button onClick={()=>{setValue1(value1+10)}}>+</button>
    </div>
  )
}

export default Fifth
