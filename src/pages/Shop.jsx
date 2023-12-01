import React from 'react'
import Hero from '../components/Hero/Hero'
import Poppular from '../components/Poppular/Poppular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollections/NewCollection'
import Newslatter from '../components/Newslatter/Newslatter'
import Item from "../components/Item/Items"


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Poppular/>
      <Offers/>
      <NewCollection/>
      <Newslatter/>
      <Item/>
     
    </div>
  )
}

export default Shop;