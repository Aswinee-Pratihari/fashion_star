import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BeakerIcon, UserIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
    const[open,setOpen]=useState(false)
    const currentUser={
        id:"1",
        name:"Aswinee",
        isSeller:true
    }
    return (
        <>
        <div className=" bg-gray-200">

        <div className='container mx-auto  flex  items-center justify-between py-6 px-10'>
            <ul className="left flex gap-4">
                <li>WOMEN</li>
                <li>WOMEN</li>
                <li>WOMEN</li>

                {/* <label for="google_translate_element">CSS</label> */}
            </ul>
            <h1 className="center text-3xl font-bold cursor-pointer">
                FASHION FOR LIFE
            </h1>
            <ul className="right flex gap-7 items-center font-semibold">
               
                <li className='relative'>
                    <HeartIcon className='w-6 h-6   ' />
                    <span className='bg-red-900 font-bold w-6 h-6 rounded-full flex justify-center items-center absolute  -top-3 -right-3 text-white'>0</span>
                </li>
                <li className='relative'>
                    <ShoppingBagIcon className='w-6 h-6' />
                    <span className='bg-red-900 font-bold w-6 h-6 rounded-full flex justify-center items-center absolute  -top-3 -right-3 text-white'>0</span>
                </li>

                {!currentUser && (  <li>
                    Join
                </li>)}
              
                
                {!currentUser && ( <li className='border-2 border-black p-2 hover:bg-black hover:border-white hover:text-white cursor-pointer duration-300 ease-in-out'>
                    Sign In
                </li>)}
                    
                    {currentUser && (
                        <div className='relative '>
                            <div onClick={()=>{setOpen(!open)}} className='link'>

                            <img src="../assets/react.svg" alt="" className='w-7' />
                            <span>{currentUser.name}</span>
                            </div>

                            {open && (

                            <div className="options absolute  top-14 right-2 w-[300px] bg-slate-400 p-3 rounded-sm space-y-4">
                                {currentUser.isSeller && (
                                    <>
                                    <li className='hover:bg-slate-50 duration-200 ease-out rounded-md p-1'>My Products</li>
                                    <li className='hover:bg-slate-50 duration-200 ease-out rounded-md p-1'>Add New Products</li>
                                    </>
                                )}
                                <li className='hover:bg-slate-50 duration-200 ease-out rounded-md p-1'>My Orders</li>
                                    <li className='hover:bg-slate-50 duration-200 ease-out rounded-md p-1'>My Messages</li>
                                    <li className='hover:bg-slate-50 duration-200 ease-out rounded-md p-1'>LogOut</li>
                            </div>
                            )}
                        </div>
                    )}
               
            </ul>
        </div>
        </div>
        
        </>

    )
}

export default Navbar