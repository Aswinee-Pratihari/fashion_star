import React from 'react'
import { ArrowPathRoundedSquareIcon, ArrowsPointingOutIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
const ProductCard = ({item}) => {
  return (
    <div className='my-6'>
      <div className="card  w-[250px]  mx-auto relative group">
      <img src={item.img} alt="" className='w-full object-cover h-[350px]'/>

      <ul className='absolute top-4 right-3 text-black space-y-4 '>
          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible'><HeartIcon className='w-6 h-6'/></li>

          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible'><ArrowsPointingOutIcon className='w-6 h-6'/></li>

          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible'><ShoppingCartIcon className='w-6 h-6'/></li>

          
          <li className='bg-white p-2 rounded-full hover:bg-red-600 duration-300 ease-in-out hover:text-white invisible group-hover:visible '><ArrowPathRoundedSquareIcon className='w-6 h-6'/></li>
            </ul>


      <div className='details space-y-3 py-4'>
        <h5> ⭐ {3}reviews</h5>
        <h2>{item.desc}</h2>
        <h6>{300}</h6>
      </div>
      </div>

    </div>
  )
}

export default ProductCard
