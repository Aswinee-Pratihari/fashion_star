import React from 'react'
import Slider from 'infinite-react-carousel';
import {cards} from "../dummyData.js"
import ProductCard from './ProductCard.jsx';
const ProductSlider = () => {
  return (
    <>
     <div className="container mx-auto">
     <Slider dots slidesToShow={3} arrowsScroll={3} dotsScroll={3} >
   {cards.map((card)=>(
      <ProductCard item={card} key={card.id}/>
   ))}
  </Slider>
     </div>
    </>
  )
}

export default ProductSlider
