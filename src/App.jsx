import { useState } from 'react'
import './App.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import Home from './ui/pages/Home'
import Pricing from './components/layouts/Pricing'
import { Content } from './ui/pages/Content'


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Content/>
      <Pricing/>
      <Footer />

    </>
  )
}

export default App;

