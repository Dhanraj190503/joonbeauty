
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from '../comman/Heading'
import { useParams, useNavigate } from 'react-router-dom'
import CdnImage from '../comman/CDNImage'
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useCart } from '../../context/CartContext'
import { Toast } from 'react-bootstrap'

const ProductDetail = () => {

    const { id } = useParams();
    const [showToast, setShowToast] = useState(false);
    const { addToCart } = useCart();   
    const navigate = useNavigate();    

 const products = [
        {
            id: '1',
            image: "/media/common/product-1.jpg",
            liked: true,
            shortDescription: "Soft lavender shade with smooth, richly pigmented application",
            description: "This soft lavender eyeliner offers a beautifully smooth and richly pigmented application that glides effortlessly across the eyelids. The lightweight formula is designed for long-lasting wear and provides intense color in just one stroke. Its smudge-resistant and transfer-proof properties make it ideal for everyday use as well as special occasions. The unique lavender tone adds a subtle yet stylish pop of color, enhancing the natural beauty of your eyes while delivering a modern and elegant finish.",
            category: "Eyeliners",
            rating: 5,
            reviews: 12,
            price: 200,
            salePrice: 299,
            isActive: true
        },
        {
            id: '2',
            image: "/media/common/product-2.jpg",
            discount: 45,
            liked: true,
            shortDescription: "Long-lasting eyeliner with intense color payoff",
            description: "This long-lasting liquid eyeliner is crafted to deliver bold and intense color payoff with every stroke. Its precision applicator allows for smooth and accurate lines, making it easy to create both subtle everyday looks and dramatic winged styles. The quick-drying waterproof formula ensures your eye makeup stays intact without smudging, fading, or cracking throughout the day. Perfect for all occasions, this eyeliner enhances the shape of your eyes while providing a sharp and defined finish.",
            category: "Eyeliners",
            rating: 3.5,
            reviews: 8,
            price: 180,
            salePrice: 249,
            isActive: true
        },
        {
            id: '3',
            image: "/media/common/product-3.jpg",
            discount: 30,
            liked: true,
            shortDescription: "Smudge-proof formula for all-day wear",
            description: "This smudge-proof eyeshadow is designed to provide vibrant color and seamless blending for a flawless eye makeup look. Its highly pigmented and lightweight formula ensures smooth application and long-lasting coverage without creasing. Whether you're going for a soft natural daytime look or a bold evening style, this eyeshadow adapts perfectly to your makeup routine. The silky texture and durable finish keep your eyes looking fresh and radiant for hours, making it an essential addition to any beauty collection.",
            category: "Eyeshadow",
            rating: 3,
            reviews: 20,
            price: 220,
            salePrice: 350,
            isActive: true
        }
    ];
    const product = products.find(p => p.id === id);

    const images = [...new Set([
        product?.image,
        "/media/common/product-1.jpg",
        "/media/common/product-2.jpg",
        "/media/common/product-3.jpg"
    ])];

    const [activeImage, setActiveImage] = useState(images[0]);
    const [count, setCount] = useState(1);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : prev));

    if (!product) return <p>Product not found</p>;

    return (
        <section className="product-detail">

            <Container>

                <Row className='align-items-start'>

                    <Col lg={6} className='pe-lg-5'>

                        <div className="product-gallery">

                            <div className="main-image">
                                <CdnImage
                                    src={activeImage}
                                    className='w-100 h-100'
                                    ImageClass='w-100 h-100 object-fit-cover'
                                />
                            </div>

                            <div className="thumbnail-wrapper">

                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumb ${activeImage === img ? "_active" : ""}`}
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <CdnImage
                                            src={img}
                                            className='w-100 h-100'
                                            ImageClass='w-100 h-100 object-fit-cover'
                                        />
                                    </div>
                                ))}

                            </div>

                            <p className='pt-2'>
                                *Images are for representation purpose only & actual product may vary.
                            </p>

                        </div>

                    </Col>


                    <Col lg={6}>

                       <div className="product-info" data-lenis-prevent>

                            <span className='category'>
                                {product.category}
                            </span>

                            <h2 className='product-title'>
                                {product.shortDescription}
                            </h2>

                            <div className="price-wrap">

                                <span className='price'>
                                    ₹{product.price}
                                </span>

                                {product.salePrice && (
                                    <span className='old-price'>
                                        ₹{product.salePrice}
                                    </span>
                                )}

                                {product.discount && (
                                    <span className='discount'>
                                        {product.discount}% Off
                                    </span>
                                )}

                                <FaHeart className='wishlist' />

                            </div>

                            <p className='product-desc'>
                                {product.description}
                            </p>

                            <div className="delivery-check">

                                <span>Delivery</span>

                                <div className='pincode'>

                                    <MdLocationOn />

                                    <input
                                        type="text"
                                        placeholder="Enter delivery pincode"
                                    />

                                    <button>
                                        Check
                                    </button>

                                </div>

                            </div>

                            <div className="cart-buttons">

                                <div className="counter">
                                    <button onClick={decrement}>−</button>
                                    <span>{count}</span>
                                    <button onClick={increment}>+</button>
                                </div>

                                {/* ADD TO CART */}
                                <button
                                    className='primary-btn'
                                    onClick={() => {
                                        addToCart(product, count);
                                        setShowToast(true);

                                        setTimeout(() => {
                                            setShowToast(false);
                                        }, 2000);
                                    }}
                                >
                                    <FaShoppingCart />
                                    ADD TO CART
                                </button>

                                {/* BUY NOW */}
                                <button
                                    className='primary-btn _pink-outline'
                                    onClick={() => {
                                        addToCart(product, count);
                                        navigate("/cart");
                                    }}
                                >
                                    BUY NOW
                                </button>

                            </div>

                            <p className='product-desc'>{product.description}</p>
                            <p className='product-desc'>{product.description}</p>

                        </div>

                    </Col>

                </Row>

            </Container>

            <div className='toaster'>
                <Toast show={showToast} bg="success">
                    <Toast.Body className="text-white text-center">
                        Product added to cart
                    </Toast.Body>
                </Toast>
            </div>

        </section>
    )
}

export default ProductDetail
