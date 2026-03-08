import React, { useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import PageHeader from '../comman/PageHeader'
import CDNImage from '../comman/CDNImage'
import { FcLike } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cart = () => {

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => (prev > 1 ? prev - 1 : prev)); // prevent below 1
    };
    return (
        <section className="cart">
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={5} xs={6}>
                        <PageHeader
                            title="Cart"
                        />
                    </Col>
                    <Col lg={5} xs={6}>

                        <div className='d-flex justify-content-end'>

                            <PageHeader
                                breadcrumb={[
                                    { pageLink: '/', subPage: 'Home' },
                                    { pageLink: '/', subPage: 'Shop' },
                                    { pageLink: '', subPage: 'Cart' }
                                ]}
                            />
                        </div>
                    </Col>

                    <Col lg={8} className='pt-lg-4'>

                        <div className="d-flex flex-column gap-3">

                            <div className="cart-detail-wrap">
                                <h5>
                                    My Cart
                                </h5>

                                <div className="d-flex align-items-center gap-2">

                                    <CDNImage src='/media/common/product-2.jpg' ImageClass='w-100 h-100 object-fit-cover' className='cart-image' />

                                    <div className='cart-detail'>

                                        <span>
                                            Lavender Eyeliner, WaterProof & Long Lasting
                                        </span>

                                        <div className="d-flex gap-1">

                                            <p>₹299 x 1 |</p>

                                            <p className='text-success text-uppercase'>
                                                Free
                                            </p>
                                        </div>

                                        <div className="counter">
                                            <button onClick={decrement}>−</button>
                                            <span>{count}</span>
                                            <button onClick={increment}>+</button>
                                        </div>
                                    </div>

                                </div>

                                <div className='d-flex justify-content-between'>

                                    <p className='cart-total'>
                                        ₹299
                                    </p>

                                    <div className='d-flex gap-2'>
                                        <button className="cart-btn">
                                            <FcLike /> Save
                                        </button>

                                        <button className="cart-btn _red">
                                            <FaTrashAlt /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className='product-note'>
                                <h5>Available combo offers for you</h5>

                                <ul>
                                    <li>Buy 2 Eyeliners at the Price of one, Use code BOGO</li>
                                    <li>Get Any 4 Products for ₹999. Use code BUY4.</li>
                                    <li>Buy 2 Lipstick for ₹599. Use code LIPSCOMBO.</li>
                                </ul>

                                <p>*You and use only 1 coupon at a time</p>
                            </div>



                        </div>


                    </Col>

                    <Col lg={4}className='pt-lg-4'>
                        <div className="cart-form">

                            <h5>
                                Order Summary
                            </h5>

                            <div className="form-wrap">

                                <p className='promo-head'>
                                    Have your promo code?
                                </p>
                                <div className="promo-code">

                                    <input type="text" className="primary-input" />

                                    <button className='primary-btn'>
                                        Apply
                                    </button>
                                </div>

                                <div className="sub-total-wrap">
                                    <div className='d-flex justify-content-between'>
                                        <span>Subtotal</span>

                                        <span>₹299</span>
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
                                        <span>
                                            Total
                                        </span>
                                        <span>₹299/-</span>
                                    </div>
                                </div>

                                <div className='cart-button-wrap'>
                                    <Link to="/checkout" className='primary-btn'>
                                        Proceed to Check Out
                                    </Link>

                                    <Link className='primary-btn _pink-outline'>
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cart