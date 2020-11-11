import React from 'react'
import HeroSection from '../../../../components/HeroSection';
import Pricing from '../../../Pricing';
import { homeObjOne, homeObjFour, homeObjThree , homeObjTwo } from './Data';


function Home() {
    return (
        <>
          <Pricing/>
          <HeroSection {...homeObjOne}/>
          <HeroSection {...homeObjThree}/>
        </>
    )
}

export default Home
