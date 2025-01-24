import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexComponent from './UI/HomePage/IndexComponent'
import Header from './GeneralComponent/Header'
import PageProgress from './GeneralComponent/PageProgress'
import Footer from './GeneralComponent/Footer'
import ShopPage from './UI/ShopPage/ShopPage'
import Contact1 from './UI/ContactPage/Contact1'

import ContextApp from './GeneralComponent/ContextApp'

import AboutPage1 from './UI/AboutPage/AboutPage1'
import Checkout from './UI/CheckoutPage/Checkout'

function App() {
  return (
    <div>
     <ContextApp>
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<IndexComponent/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/contact' element={<Contact1/>}/>
          <Route path='/about' element={<AboutPage1/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <PageProgress/>
        <Footer/>
      </BrowserRouter>
     </ContextApp>
    </div>
  )
}

export default App