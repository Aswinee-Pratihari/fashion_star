import React from 'react'
import {cards} from "../dummyData.js"
import { BanknotesIcon, DocumentCheckIcon, HomeIcon } from '@heroicons/react/24/outline'
const SellerFeature = () => {
  return (
    <div className='py-6 w-full bg-red-300 rounded-md px-3 flex justify-around my-6 items-center'>
      <div className="left">
<h5 className='text-2xl font-semibold'>Benefits of being a Seller on Fashion Star</h5>
<ul className="space-y-5 py-8">
    <li className='flex gap-3 items-center font-semibold text-xl '>
        <BanknotesIcon className='w-10 h-10'/>
        <span>Easy Money</span>
    </li>
    <li className='flex gap-3 items-center font-semibold text-xl '>
        <DocumentCheckIcon className='w-10 h-10'/>
        <span>HassleFree Pickup and Delievery</span>
    </li>
    <li className='flex gap-3 items-center font-semibold text-xl '>
        <DocumentCheckIcon className='w-10 h-10'/>
        <span>Easy Product Registration</span>
    </li>

    <li className='flex gap-3 items-center font-semibold text-xl '>
        <HomeIcon className='w-10 h-10'/>
        <span>Sell from your comfort</span>
    </li>
</ul>

<button className='bg-black text-white rounded-xl py-2 px-3 text-xl hover:bg-white hover:text-black duration-300 ease-in-out hover:border-black border-2'>Become A seller</button>
      </div>
      <div className="right">
        <img src={cards[0].img} alt="" className='w-full h-[400px] object-cover'/>
      </div>
    </div>
  )
}

export default SellerFeature
