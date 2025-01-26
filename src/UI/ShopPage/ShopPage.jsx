import React from 'react'
import Shop1 from './Shop1'
import './shop.css'
import Shop2 from './Shop2'
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';


function ShopPage() {
  return (
    <div>
      <Shop1/>
      <Shop2/>

   
    </div>
  )
}

export default ShopPage
