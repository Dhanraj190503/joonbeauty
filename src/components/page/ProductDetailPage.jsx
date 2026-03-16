import React from 'react'
import ProductDetail from '../product-detail/ProductDetail'
import ProductSlider from '../product-detail/ProductSlider'
import ProductInfo from '../product-detail/ProductInfo'

const ProductDetailPage = () => {
    return (
        <>
            <ProductDetail />

            <ProductInfo />

            <ProductSlider/>
        </>
    )
}

export default ProductDetailPage