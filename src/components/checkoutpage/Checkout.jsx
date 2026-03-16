import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from '../comman/Heading'
import CDNImage from '../comman/CDNImage'
import { Link, useNavigate } from 'react-router-dom'
import CdnImage from '../comman/CDNImage'
import { useCart } from '../../context/CartContext'

const Checkout = () => {

    const { cart } = useCart();
    const navigate = useNavigate();

    const razorpayImage = '/media/common/razorpay.png'
    const codImage = '/media/common/cod.png'

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const total = subtotal;

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/cart")
        }
    }, [cart, navigate])

    return (
        <section className="checkout">

            <div className="page-hedaer-wrappper">
                <CdnImage className='bg-image' ImageClass='w-100 h-100 object-fit-cover' src='/media/common/header-bg.png' />
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Heading title="Checkout" />
                        </Col>

                        <Col lg={6}>
                            <div className="d-flex justify-content-end">
                                <Heading
                                    breadcrumb={[
                                        { pageLink: '/', subPage: 'Home' },
                                        { pageLink: '/', subPage: 'Shop' },
                                        { pageLink: '', subPage: 'Checkout' }
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className='justify-content-between py-4'>

                    <Col lg={12} className='pt-lg-2'>
                        <p className='login-link'>
                            Returning customer?
                            <Link>Click here to login</Link>
                        </p>
                    </Col>

                    {/* Billing Section */}

                    <Col lg={8} className='pt-lg-2'>

                        <div className="d-flex flex-column gap-3">

                            <div className="cart-detail-wrap">
                                <h5>Billing Details</h5>

                                <Row className='gy-3'>

                                    <Col lg={6}>
                                        <input type="text" placeholder='First Name*' className='form-control' required />
                                    </Col>

                                    <Col lg={6}>
                                        <input type="text" placeholder='Last Name*' className='form-control' required />
                                    </Col>

                                    <Col lg={6}>
                                        <input type="email" placeholder='Email Address*' className='form-control' required />
                                    </Col>

                                    <Col lg={6}>
                                        <input type="text" placeholder='Phone Number*' className='form-control' required />
                                    </Col>

                                    <Col lg={6}>
                                        <input type="text" placeholder='Address*' className='form-control' required />
                                    </Col>

                                    <Col lg={6}>
                                        <input type="text" placeholder='City*' className='form-control' required />
                                    </Col>

                                    <Col lg={6}>

                                        <select className='form-control'>
                                            <option>Select State*</option>
                                            <option>Maharashtra</option>
                                            <option>Gujarat</option>
                                            <option>Delhi</option>
                                            <option>Karnataka</option>
                                            <option>Tamil Nadu</option>
                                        </select>

                                    </Col>

                                    <Col lg={6}>
                                        <input type="text" placeholder='Postal Code*' className='form-control' required />
                                    </Col>

                                </Row>
                            </div>


                            {/* Payment Section */}

                            <div className='payment-method'>

                                <h5>Payment Method</h5>

                                <div className="d-flex flex-column gap-4 gap-lg-5">

                                    <div className='payment-wrapper'>

                                        <p>Banking / Wallet / UPI</p>

                                        <div className="payment-option">

                                            <div className="d-flex align-items-center gap-2">
                                                <input type='radio' name='payment' />
                                                <span>Razorpay</span>
                                            </div>

                                            <CdnImage
                                                src={razorpayImage}
                                                ImageClass='w-100 h-100 object-fit-cover'
                                                className='payment-image'
                                            />

                                        </div>

                                    </div>

                                    <div className='payment-wrapper'>

                                        <p>Pay on receiving your order</p>

                                        <div className="payment-option">

                                            <div className="d-flex align-items-center gap-2">
                                                <input type='radio' name='payment' />
                                                <span>Cash on Delivery</span>
                                            </div>

                                            <CdnImage
                                                src={codImage}
                                                ImageClass='w-100 h-100 object-fit-cover'
                                                className='payment-image _cod'
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </Col>


                    {/* ORDER SUMMARY */}

                    <Col lg={4} className=' pt-4 pt-lg-2'>

                        <div className="cart-form">

                            <h5>Order Summary</h5>

                            <div className="form-wrap">

                                {cart.map(item => (

                                    <div
                                        key={item.id}
                                        className='d-flex justify-content-between align-items-center mb-3'
                                    >

                                        <div className="d-flex align-items-center gap-2">

                                            <CDNImage
                                                src={item.image}
                                                ImageClass='w-100 h-100 object-fit-cover'
                                                className='cart-image'
                                            />

                                            <div className='cart-detail'>

                                                <span>
                                                    {item.shortDescription}
                                                </span>

                                                <div className="d-flex gap-1">
                                                    <p>₹{item.price}</p>
                                                </div>

                                                <p className="quantity">
                                                    Qty: {item.quantity}
                                                </p>

                                            </div>

                                        </div>

                                        <p className='price'>
                                            ₹{item.price * item.quantity}
                                        </p>

                                    </div>

                                ))}

                                <div className="sub-total-wrap">

                                    <div className='d-flex justify-content-between'>
                                        <span>Subtotal</span>
                                        <span>₹{subtotal}</span>
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <p>Delivery</p>
                                        <p className='text-success text-uppercase'>
                                            Free
                                        </p>
                                    </div>

                                </div>

                                <div className="total-wrap">

                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>₹{total}/-</span>
                                    </div>

                                </div>

                                <div className='cart-button-wrap'>
                                    <button className='primary-btn'>
                                        Place Your Order & Pay
                                    </button>
                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Checkout

