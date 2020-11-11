import React from 'react'
import HeroSection from '../../../../components/HeroSection';

import { homeObjOne, homeObjFour, homeObjThree , homeObjTwo } from './Data';


function Products() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
        </>
    )
}

export default Products;
