import React from 'react'

// Here the data send by the higher function is received by the lower function in form of props. So we have to use props as parameter in the lower function to receive the data.
const Lower = ({subject}) => {

    console.log(subject)
  return (
    <div>
        <div style={{border:"2px solid white"}}>
            <h1>Name:{subject.name}</h1>
            <h1>Age:{subject.age}</h1>
            <h1>City:{subject.city}</h1>
            <h1>Occupation:{subject.occupation}</h1>
        </div>
    </div>
  )
}

export default Lower
