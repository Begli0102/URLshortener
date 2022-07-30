import React from 'react'
import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
