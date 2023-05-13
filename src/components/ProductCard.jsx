import { ArrowPathRoundedSquareIcon, ArrowsPointingOutIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
 
  return (
    <>
    {/* <Link to="/"> */}
        <div className="card w-[400px] h-[500px] text-white relative group ">
            <img src={item.img} alt="" className='w-full h-full object-cover'/>
            <span className='absolute top-0 '>{item.desc}</span>
            <span>{item.title}</span>

            <ul className='absolute top-4 right-3 text-black space-y-4 '>
          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible'><HeartIcon className='w-6 h-6'/></li>

          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible'><ArrowsPointingOutIcon className='w-6 h-6'/></li>

          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible'><ShoppingCartIcon className='w-6 h-6'/></li>

          
          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible '><ArrowPathRoundedSquareIcon className='w-6 h-6'/></li>
            </ul>

            <div className='mx-4 bg-white text-black absolute bottom-0 rounded-t-lg inset-x-0 p-4'>
              <h5>{item.desc}</h5>
              <h6>{300}</h6>
              <span>3 reviews</span>
            </div>
        </div>
    {/* </Link> */}
    </>
  )
}

export default ProductCard


