import React from 'react'
import Features from '../components/Features'
import ProductSlider from '../components/ProductSlider'
import {cards} from "../dummyData.js"
import ProductCard from '../components/ProductCard.jsx'
import SellerFeature from '../components/SellerFeature'
import CategoryCard from '../components/CategoryCard'
import WordFromMaker from '../components/WordFromMaker'
const Home = () => {
  return (
    <div className='container  mx-auto'>
        <Features/>
        <ProductSlider slidesToShow={3} arrowsScroll={3} dotsScroll={3}>
        {cards.map((card)=>(
      <ProductCard item={card} key={card.id}/>
   ))}
          </ProductSlider>

          <SellerFeature/>


          <ProductSlider slidesToShow={3} arrowsScroll={3} dotsScroll={3}>
        {cards.map((card)=>(
      <ProductCard item={card} key={card.id}/>
   ))}
          </ProductSlider>


          <ProductSlider slidesToShow={5} arrowsScroll={6} dotsScroll={6}>
        {cards.map((card)=>(
      <CategoryCard item={card} key={card.id}/>
   ))}
          </ProductSlider>

          <WordFromMaker/>
    </div>
  )
}

export default Home