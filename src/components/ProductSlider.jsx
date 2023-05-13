import React from 'react'
import Slider from 'infinite-react-carousel';
import {cards} from "../dummyData.js"
import ProductCard from './ProductCard.jsx';
<<<<<<< HEAD
const ProductSlider = () => {

  return (
    <>
     <div className="container mx-auto">
      <div className='py-10  flex justify-between items-center'>
        <h3 className='text-3xl font-bold mr-8'>Featured Products</h3>
        <p className='text-gray-500 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit voluptas qui commodi corrupti obcaecati aperiam perferendis pariatur, natus porro, optio dignissimos reprehenderit omnis praesentium dolore id? Numquam, sapiente reiciendis!</p>
      </div>
     <Slider dots slidesToShow={3} arrowsScroll={3} dotsScroll={3} >
   {cards.map((card)=>(
      <ProductCard item={card} key={card.id}/>
   ))}
=======
const ProductSlider = ({children,slidesToShow,arrowsScroll,dotsScroll}) => {
  return (
    <>
     <div className="container mx-auto">
     <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} dotsScroll={dotsScroll} >
   {children}
>>>>>>> Crousalslider
  </Slider>
     </div>
    </>
  )
}

export default ProductSlider
