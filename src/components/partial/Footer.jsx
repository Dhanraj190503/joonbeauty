import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CdnImage from '../comman/CDNImage'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Footer = () => {
    return (
        <footer>

            
            <Container>
                <Row>
                    <Col lg={6}>
                        <CdnImage src='public/media/common/logo.svg' ImageClass='w-100 h-100 object-fit-cover' className='footer-logo' />
                        <p>
                            Joon Beauty is a premium cosmetic brand dedicated to enhancing natural beauty
                            through thoughtfully crafted skincare and makeup products. Our formulations blend quality
                            ingredients with modern beauty science to deliver effective, safe, and elegant solutions for everyday beauty needs.
                        </p>

                    </Col>
                    <Col lg={6} className='pb-4'>
                        <div className="h-100 d-flex flex-column justify-space-between">


                            <div className="footer-social-wrap">
                                <div className="footer-social">
                                    <p>Get social with us</p>

                                    <div className="d-flex gap-2">
                                        <span><RiFacebookFill /></span>
                                        <span><FaInstagram /></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row className='pb-3'>
                    <Col lg={3}>
                        <div className='footer-links'>
                            <h5>Quick Help</h5>
                            <ul>
                                <li><Link to='/contact-us'>Contact Us </Link></li>
                                <li><Link to='/contact-us'>My Orders </Link></li>
                                <li><Link to='/contact-us'> Privacy Policy </Link></li>
                                <li><Link to='/contact-us'> Terms of Service</Link></li>
                                <li><Link to='/contact-us'> FAQs</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footer-links'>
                            <h5>Get To Know Us</h5>
                            <ul>
                                <li><Link to='/contact-us'>About Us </Link></li>
                                <li><Link to='/contact-us'> Shop </Link></li>
                                <li><Link to='/contact-us'> Lipstick </Link></li>
                                <li><Link to='/contact-us'> Combos </Link></li>
                                <li><Link to='/contact-us'> Eyeshadow</Link></li>
                                <li><Link to='/contact-us'> Eyeliners</Link></li>
                                <li><Link to='/blog'> Blog</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} className='ps-lg-4'>
                        <div className='footer-links'>
                            <h5>SignUp for our newsletter!</h5>

                            <p>
                                Stay updated with our latest news, product launches, exclusive offers, and beauty tips—delivered straight to your inbox.
                            </p>

                            <InputGroup className="mb-3 footer-input">
                                <Form.Control
                                    placeholder="Enter Your email address"
                                    aria-label="Enter Your email address"
                                    aria-describedby="basic-addon2"
                                    className=''
                                />
                                <Button variant="" id="button-addon2">
                                    SUBSCRIBE
                                </Button>
                            </InputGroup>

                        </div>
                    </Col>

                </Row>

                <div className="footer-copyright">

                    <p>© 2026 JoonBeauty. All rights reserved. Designed with care.</p>

                    <p className='d-flex align-items-center'> 
                        <span className='d-flex justify-content-center'>
                       <svg width="20px" height="20px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
                        <path d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z" />
                        </svg>  
                        </span>
                        
                        Made in India</p>

                </div>

            </Container>
        </footer>
    )
}

export default Footer