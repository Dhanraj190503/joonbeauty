import React, { useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import PageHeader from '../comman/PageHeader'
import CDNImage from '../comman/CDNImage'
import { FcLike } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CdnImage from '../comman/CDNImage';


const Checkout = () => {

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => (prev > 1 ? prev - 1 : prev)); // prevent below 1
    };
    return (
        <section className="checkout">
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={5} xs={6}>
                        <PageHeader
                            title="Checkout"
                        />
                    </Col>
                    <Col lg={5} xs={6}>

                        <div className='d-flex justify-content-end'>

                            <PageHeader
                                breadcrumb={[
                                    { pageLink: '/', subPage: 'Home' },
                                    { pageLink: '/', subPage: 'Shop' },
                                    { pageLink: '', subPage: 'Checkout' }
                                ]}
                            />
                        </div>
                    </Col>

                    <Col lg={12} className='pt-lg-2'>

                        <p className='login-link'>
                            Returning customer?
                            <Link>
                                Click here to login
                            </Link>
                        </p>
                    </Col>

                    <Col lg={8} className='pt-lg-2'>


                        <div className="d-flex flex-column gap-3">

                            <div className="cart-detail-wrap">
                                <h5>
                                    Billing Details
                                </h5>

                                <Row className='gy-3'>
                                    <Col lg={6}>
                                        <input type="text" placeholder='First Name*' className='form-control' />
                                    </Col>
                                    <Col lg={6}>
                                        <input type="text" placeholder='Last Name*' className='form-control' />
                                    </Col>
                                    <Col lg={6}>
                                        <input type="email" placeholder='Email Address*' className='form-control' />
                                    </Col>
                                    <Col lg={6}>
                                        <input type="text" placeholder='Phone Number*' className='form-control' />
                                    </Col>
                                    <Col lg={6}>
                                        <input type="text" placeholder='Address*' className='form-control' />
                                    </Col>
                                    <Col lg={6}>
                                        <input type="text" placeholder='City*' className='form-control' />
                                    </Col>
                                    <Col lg={6}>
                                        <select name="state" id="state" className='form-control'>
                                            <option value="">Select State*</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                        </select>
                                    </Col>
                                    <Col lg={6}>
                                        <input type="text" placeholder='Postal Code*' className='form-control' />
                                    </Col>

                                    <Col lg={12}>
                                        <div className='d-flex gap-2'>
                                            <input type="checkbox" id='createAccount' />
                                            <p>Shift to a different address</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>


                            <div className='payment-method'>


                                <h5>Payment Method</h5>

                                <p>
                                    Pay online using Credit/Debit Card/Net
                                </p>

                                <div className="d-flex flex-column gap-4 gap-lg-5">

                                    <div className='payment-wrapper'>
                                        <p>
                                            Banking / Wallet / UPI
                                        </p>

                                        <div className="payment-option">

                                            <div className="d-flex align-items-center gap-2">
                                                <input type='radio' name='payment' className='radio-btn' />
                                                <span>
                                                    Razorpay
                                                </span>
                                            </div>

                                            <CdnImage src='/media/common/razorpay.png' ImageClass='w-100 h-100 object-fit-cover' className='payment-image' />


                                        </div>
                                    </div>
                                    <div className='payment-wrapper'>
                                        <p>
                                            Pay on receiving your order at your doorstep
                                        </p>

                                        <div className="payment-option">

                                            <div className="d-flex align-items-center gap-2">
                                                <input type='radio' name='payment' className='radio-btn' />
                                                <span>
                                                    Cash on Deliver
                                                </span>
                                            </div>

                                            <CdnImage src='/media/common/cod.png' ImageClass='w-100 h-100 object-fit-cover' className='payment-image _cod' />

                                        </div>
                                    </div>

                                </div>


                            </div>



                        </div>


                    </Col>

                    <Col lg={4} className=' pt-4 pt-lg-2'>
                        <div className="cart-form">

                            <h5>
                                Order Summary
                            </h5>

                            <div className="form-wrap">

                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className="d-flex align-items-center    gap-2">
                                        <CDNImage src='/media/common/product-2.jpg' ImageClass='w-100 h-100 object-fit-cover' className='cart-image' />

                                        <div className='cart-detail'>

                                            <span>
                                                Lavender Eyeliner, WaterProof & Long Lasting
                                            </span>

                                            <div className="d-flex gap-1">
                                                <p>₹299</p>
                                            </div>

                                            <p className="quantity">
                                                Qty: {count}
                                            </p>
                                        </div>
                                    </div>

                                    <p className='price'>
                                        ₹299
                                    </p>

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
                                        Place Your Order & Pay
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

export default Checkout