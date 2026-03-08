import { useState } from 'react'
import React from "react";
import './assets/sass/style.scss'
import Header from './components/partial/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/partial/Footer'
import HomePage from './components/page/HomePage'
import CartPage from './components/page/CartPage'
import CheckoutPage from './components/page/CheckoutPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
