import React from 'react'
import Slider from 'infinite-react-carousel';
import {cards} from "../dummyData.js"
import ProductCard from './ProductCard.jsx';
const ProductSlider = ({children,slidesToShow,arrowsScroll,dotsScroll}) => {
  return (
    <>
     <div className="container mx-auto">
     <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} dotsScroll={dotsScroll} >
   {children}
  </Slider>
     </div>
    </>
  )
}

export default ProductSlider
