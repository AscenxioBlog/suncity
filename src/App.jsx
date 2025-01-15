import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexComponent from './UI/HomePage/IndexComponent'
import Header from './GeneralComponent/Header'
import PageProgress from './GeneralComponent/PageProgress'
import Footer from './GeneralComponent/Footer'
import ShopPage from './UI/ShopPage/ShopPage'
import Contact1 from './UI/ContactPage/Contact1'
import ContextApp from './GeneralComponent/ContextApp'
function App() {
  return (
    <div>
     <ContextApp>
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<IndexComponent/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/contact' element={<Contact1/>} />
        </Routes>
        <PageProgress/>
        <Footer/>
      </BrowserRouter>
     </ContextApp>
    </div>
  )
}

export default App