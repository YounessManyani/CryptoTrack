import React from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div 
    style={{
       backgroundColor:'black'
    }}
    >
    <Navbar/>    
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/coin/:coinId' index element={<Coin/>}/>
    </Routes>
    <Footer/>

    </div>
  )
}

export default App
