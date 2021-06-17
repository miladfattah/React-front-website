import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne  , homeObjThree } from './Data';
const SignUp = () => {
     
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
        </>
    )
       
}

export default SignUp;