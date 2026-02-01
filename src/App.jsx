import { useState } from 'react'
import './assets/sass/style.scss'
import Header from './components/partial/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/partial/Footer'
import HomePage from './components/page/HomePage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
