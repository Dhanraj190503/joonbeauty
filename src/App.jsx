import { useState } from 'react'
import React from "react";
import './assets/sass/style.scss'
import { useEffect } from "react";
import Lenis from "lenis";
import Header from './components/partial/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/partial/Footer'
import HomePage from './components/page/HomePage'
import CartPage from './components/page/CartPage'
import CheckoutPage from './components/page/CheckoutPage'
import { CartProvider } from './context/CartContext';
import ProductDetailPage from './components/page/ProductDetailPage';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </CartProvider>

    </>
  )
}

export default App
