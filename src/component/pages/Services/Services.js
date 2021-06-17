import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjOne  , homeObjThree } from './Data';
const Services = () => {
     
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
        </>
    )
       
}

export default Services;