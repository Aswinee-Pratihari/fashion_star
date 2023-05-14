import React from 'react'
import {cards} from "../dummyData.js"
import ProductCard from './ProductCard.jsx'
const ProductList = () => {
  return (
    <div className='grid grid-cols-3 '>
        {cards?.map((item)=>(
            <ProductCard item={item}/>
        ))}
    </div>
  )
}

export default ProductList