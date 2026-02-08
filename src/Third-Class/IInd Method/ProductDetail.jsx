import React from 'react'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import ProductQty from './ProductQty'
import ProductDescrption from './ProductDescrption'

const ProductDetail = ({name,price,qty,desc}) => {
    // This is the way how we accept the props in the component. We can also accept the props in the form of an object. Like this :
    // const ProductDetail = (props) => {
    console.log(name,price,qty,desc)   
  return (
    <div style={{border:"2px solid white",margin:"30px",padding:"20px"}}>
      <ProductName name={name}/>
      <ProductPrice price={price}/>
      <ProductQty qty={qty}/>
      <ProductDescrption desc={desc}/>
    </div>
  )
}

export default ProductDetail
