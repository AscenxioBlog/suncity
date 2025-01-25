import React from 'react'
import Index1 from './Index1'
import Index2 from './Index2'
import Index3 from './Index3'
import Index4 from './Index4'
import Indexpage5 from './Indexpage5'
import './home.css'
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BiMessageRoundedAdd } from "react-icons/bi";

function IndexComponent() {
  return (
    <div>
        <Index1/>
        <Index2/>
        <Index3/>
        <Index4/>
        <Indexpage5/>
  
    </div>
  )
}

export default IndexComponent