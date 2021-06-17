import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjOne , homeObjTwo , homeObjThree ,homeObjFour} from './Data';
const Products = () => {
     
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <Pricing />  
        </>
    )
       
}

export default Products;