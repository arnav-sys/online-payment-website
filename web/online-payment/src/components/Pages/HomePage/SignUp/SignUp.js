import React from 'react'
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa';
import HeroSection from '../../../../components/HeroSection';

import { homeObjOne, homeObjFour, homeObjThree , homeObjTwo } from './Data';


function SignUp() {
    return (
        <>
          <HeroSection {...homeObjOne}/>
          <HeroSection {...homeObjThree}/>
        </>
    )
}

export default SignUp;
