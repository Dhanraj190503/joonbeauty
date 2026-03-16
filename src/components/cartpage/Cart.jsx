import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import Heading from '../comman/Heading'
import CDNImage from '../comman/CDNImage'
import { FcLike } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CdnImage from '../comman/CDNImage';
import { useCart } from '../../context/CartContext';

const Cart = () => {

    const { cart, removeFromCart, updateQuantity } = useCart();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <section className="cart">

            <div className="page-hedaer-wrappper">
                <CdnImage
                    className='bg-image'
                    ImageClass='w-100 h-100 object-fit-cover'
                    src='/media/common/header-bg.png'
                />

                <Container>
                    <Row>

                        <Col lg={6}>
                            <Heading title="Cart" />
                        </Col>

                        <Col lg={6}>

                            <div className="d-flex justify-content-end">
                                <Heading
                                    breadcrumb={[
                                        { pageLink: '/', subPage: 'Home' },
                                        { pageLink: '/', subPage: 'Shop' },
                                        { pageLink: '', subPage: 'Cart' }
                                    ]}
                                />
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>


            <Container>
                <Row className='justify-content-between py-4 gy-3 gy-lg-0'>

                    <Col lg={8} className='pt-lg-4'>

                        <div className="d-flex flex-column gap-3">

                            <div className="cart-detail-wrap">

                                <h5>My Cart</h5>

                                {cart.length === 0 && (
                                    <Alert variant="info">
                                        Your cart is empty
                                    </Alert>
                                )}

                                {cart.map(item => (

                                    <div key={item.id}>

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

                                                    <p>
                                                        ₹{item.price} x {item.quantity} |
                                                    </p>

                                                    <p className='text-success text-uppercase'>
                                                        Free
                                                    </p>

                                                </div>

                                                <div className="counter">

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity > 1
                                                                    ? item.quantity - 1
                                                                    : 1
                                                            )
                                                        }
                                                    >
                                                        −
                                                    </button>

                                                    <span>
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity + 1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                        <div className='d-flex justify-content-between'>

                                            <p className='cart-total'>
                                                ₹{item.price * item.quantity}
                                            </p>

                                            <div className='d-flex gap-2'>

                                                <button className="cart-btn">
                                                    <FcLike /> Save
                                                </button>

                                                <button
                                                    className="cart-btn _red"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <FaTrashAlt /> Delete
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>


                            <div className='product-note'>

                                <h5>
                                    Available combo offers for you
                                </h5>

                                <ul>
                                    <li>
                                        Buy 2 Eyeliners at the Price of one, Use code BOGO
                                    </li>

                                    <li>
                                        Get Any 4 Products for ₹999. Use code BUY4.
                                    </li>

                                    <li>
                                        Buy 2 Lipstick for ₹599. Use code LIPSCOMBO.
                                    </li>
                                </ul>

                                <p>
                                    *You and use only 1 coupon at a time
                                </p>

                            </div>

                        </div>

                    </Col>


                    <Col lg={4} className='pt-lg-4'>

                        <div className="cart-form">

                            <h5>
                                Order Summary
                            </h5>

                            <div className="form-wrap">

                                <p className='promo-head'>
                                    Have your promo code?
                                </p>

                                <div className="promo-code">

                                    <input
                                        type="text"
                                        className="primary-input"
                                    />

                                    <button className='primary-btn'>
                                        Apply
                                    </button>

                                </div>


                                <div className="sub-total-wrap">

                                    <div className='d-flex justify-content-between'>

                                        <span>Subtotal</span>

                                        <span>
                                            ₹{subtotal}
                                        </span>

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

                                        <span>
                                            ₹{subtotal}/-
                                        </span>

                                    </div>

                                </div>


                                <div className='cart-button-wrap'>
                                    <Link
                                        to={cart.length === 0 ? "#" : "/checkout"}
                                        className={`primary-btn ${cart.length === 0 ? "disabled-btn" : ""}`}
                                    >
                                        Proceed to Check Out
                                    </Link>

                                    {cart.length === 0 && (
                                        <p className="text-danger mt-2">
                                            Please add a product to proceed to checkout
                                        </p>
                                    )}

                                    <Link
                                        to="/"
                                        className='primary-btn _pink-outline'
                                    >
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