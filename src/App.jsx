import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/footer/Footer'




export default function App() {
  return (<>
    <Navbar/>
  <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='home' element={<Home/>}/>
 <Route path='portfolio' element={<Portfolio/>}/>
 <Route path='About' element={<About/>}/>
 <Route path='Contact' element={<Contact/>}/>
    </Routes>
<Footer/>
   </>
  )
}
