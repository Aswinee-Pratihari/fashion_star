import React from 'react'
import Features from '../components/Features'
import ProductSlider from '../components/ProductSlider'
import {cards} from "../dummyData.js"
import ProductCard from '../components/ProductCard.jsx'
const Home = () => {
  return (
    <div className='container  mx-auto'>
        <Features/>
        <ProductSlider slidesToShow={3} arrowsScroll={3} dotsScroll={3}>
        {cards.map((card)=>(
      <ProductCard item={card} key={card.id}/>
   ))}
          </ProductSlider>
    </div>
  )
}

export default Home