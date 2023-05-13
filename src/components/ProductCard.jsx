import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <>
    {/* <Link to="/"> */}
        <div className="card w-[400px] h-[500px] text-white relative">
            <img src={item.img} alt="" className='w-full h-full object-cover'/>
            <span className='absolute top-0 '>{item.desc}</span>
            <span>{item.title}</span>
        </div>
    {/* </Link> */}
    </>
  )
}

export default ProductCard