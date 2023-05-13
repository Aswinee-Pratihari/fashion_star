import React from 'react'

const CategoryCard = ({item}) => {
  return (
    <div className='text-center'>

    <div className="card  text-black  group  w-[200px] h-[200px] mx-auto">
    <img src={item.img} alt="" className=' object-cover w-full h-full'/>
    </div>
    <span className='font-semibold'>{item.title}</span>
    </div>
  )
}

export default CategoryCard