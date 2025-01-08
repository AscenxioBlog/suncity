import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexComponent from './UI/HomePage/IndexComponent'
import Header from './GeneralComponent/Header'
import PageProgress from './GeneralComponent/PageProgress'
import Footer from './GeneralComponent/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<IndexComponent/>}/>
        </Routes>
        <PageProgress/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App