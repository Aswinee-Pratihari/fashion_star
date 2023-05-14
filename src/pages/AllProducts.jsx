import React, { useState } from 'react'
import ProductList from '../components/ProductList'

const AllProducts = () => {
  const [Maxprice,setMaxPrice]=useState(10000)
  return (
    <>
<div className='container mx-auto flex justify-between'>
  <div className="left flex-1 sticky h-full top-[20px] gap-5 py-6">
    <div className="options">
      <h4 className='font-bold text-xl py-4'>Product Category</h4>
      <div className="inputs space-x-4 font-semibold text-lg">
      <input type="checkbox" name="" id="shirts" />
      <label htmlFor="shirts">Shirts</label>
      </div>

      <div className="inputs space-x-4 font-semibold text-lg">
      <input type="checkbox" name="" id="jeans" />
      <label htmlFor="jeans">Jeans</label>
      </div>

      <div className="inputs space-x-4 font-semibold text-lg">
      <input type="checkbox" name="" id="footwear" />
      <label htmlFor="footwear">Footwear</label>
      </div>

      <div className="inputs space-x-4 font-semibold text-lg">
      <input type="checkbox" name="" id="jackets" />
      <label htmlFor="jackets">Jackets</label>
      </div>

      <div className="inputs space-x-4 font-semibold text-lg">
      <input type="checkbox" name="" id="watches" />
      <label htmlFor="watches">Watches</label>
      </div>

      <div className="inputs space-x-4 font-semibold text-lg">
      <input type="checkbox" name="" id="sunGlasses" />
      <label htmlFor="sunGlasses">SunGlasses</label>
      </div>
    </div>
    <div className="options">
      <h4 className='font-bold text-xl py-4'>Filter by price</h4>
      <div className="input space-x-4">
        {/* <h5>price: {0} - {10000}</h5> */}
        <span>0</span>
        <input type="range" name="" id="price" min={0} max={10000} onChange={(e)=>{setMaxPrice(e.target.value)}} className='w-[200px]' />
        <span>{Maxprice}</span>
      </div>
    </div>
    <div className="options">
      <h4 className='font-bold text-xl py-4'>Sort By Price</h4>
      <div className="inputs flex flex-col ">
        <div className='space-x-4 font-semibold text-lg text-gray-500'>

       <input type="radio" name="price" id="desc" />
        <label htmlFor="desc">High to Low </label>
        </div>

<div className='space-x-4 font-semibold text-lg text-gray-500'>
        <input type="radio" name="price" id="asc" />
        <label htmlFor="asc">Low to High </label>
</div>
      </div>
    </div>
  </div>
  <div className="right flex-[3] py-6">
    <div className="banner">
      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='h-[300px] w-full object-cover rounded-xl'/>
    </div>
    <ProductList/>
  </div>
</div>
    </>
  )
}

export default AllProducts