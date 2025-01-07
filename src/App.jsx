import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexComponent from './UI/HomePage/IndexComponent'
import Header from './GeneralComponent/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<IndexComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App