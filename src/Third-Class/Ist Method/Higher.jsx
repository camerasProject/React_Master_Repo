import React from 'react'
import Lower from './Lower'

const Higher = () => {
    let data={
        name:"Ayush",
        age:25,
        city:"Delhi",
        occupation:"Software Engineer"
    }
  return (
    <div>
        {/* In props data is send in form of attribute & their value. */}
        <Lower subject={data}/>
    </div>
  )
}

export default Higher
