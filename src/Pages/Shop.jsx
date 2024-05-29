import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popuar/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import Offers from '../Components/Offers/Offers';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Hero/>
          <Popular/>
          <Offers/>
        <NewCollections />       
        <NewsLetter /> 
        </div>
        
   )
}

export default Shop
