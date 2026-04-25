
import Header from './component/pages/Header'
import React from 'react'
import Footer from './component/pages/Footer'
import Hero from './assets/ui/Hero'
import Home from './assets/ui/home'
import About from './assets/ui/about'
import { Routes, Route } from "react-router-dom"
import Courses from './component/pages/Courses'

const App = () => {
  return (
    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>

      <Footer/>


    </div>
  )
}

export default App