import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CdnImage from '../comman/CDNImage'
import Heading from '../comman/Heading'

const ProductInfo = () => {
    return (

        <section className='product-info-wrapper'>

            <Container>
                <Row className='gy-lg-5 gy-4'>
                    <Col lg={5} className=''>

                        <div className="d-flex justify-content-center">

                            <div className='image-wrapper'>

                                <CdnImage ImageClass='w-100 h-100 object-fit-cover' src='/media/common/product-1-2.jpg' className='product-info-image' />
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} className='ps-lg-5'>

                        <div className="product-detail-wrapper">
                            <Heading title='How to use Lavender Eyeliner' />

                            <ul>
                                <li>
                                    Prepare your eyes: Start by cleaning your eyelids and removing any makeup residue. You can also apply eyeshadow or primer if desired, which can help the eyeliner last longer and prevent smudging.
                                </li>
                                <li>
                                    Decide on your eyeliner style: Determine the style you want to achieve, whether it’s a thin line along the lash line or a winged/cat-eye look. Knowing the desired outcome will guide your technique.
                                </li>
                                <li>
                                    Rest your elbow: Find a stable surface to rest your elbow on, such as a table or countertop, to steady your hand while applying the eyeliner.
                                </li>
                                <li>
                                    Start from the inner corner: Begin by applying eyeliner from the inner corner of your eye, working your way towards the outer corner. For a subtle look, apply a thin line close to the lash line. For a bolder look, you can make the line thicker.
                                </li>
                                <li>
                                    Control the pressure: Apply gentle pressure while using the eyeliner to avoid tugging or pulling on your eyelids, as this can cause discomfort or wrinkles.
                                </li>
                                <li>
                                    Use short strokes: Instead of attempting to draw a continuous line, use small strokes to create a smooth and even line. This technique helps with precision and reduces mistakes.
                                </li>
                            </ul>

                            <button className='primary-btn _dark-outline'>
                                Read More
                            </button>

                            <div className='extra-detail'>

                                <p>Country of Origin - <strong>India</strong></p>
                                <p>Net Vol - <strong>6ml</strong></p>

                            </div>

                        </div>

                    </Col>

                    <Col lg={7} className='pe-lg-5 order-4 order-lg-3'>
                        <div className="product-detail-wrapper">
                            <Heading title='Pro Tips For Lavender Eyeliner' />
                            <ul>
                                <li>
                                    Start with a neutral base: To make your pastel eyeliner pop, start by applying a neutral eyeshadow base like copper. This will help the pastel colour stand out more and prevent it from blending in with your skin tone.
                                </li>
                                <li>
                                    Experiment with shapes: Try experimenting with different eyeliner shapes, such as graphic liner, floating liner, colourful double wing, soft fox-eye effect, or even a geometric shape. It looks really cool.
                                </li>
                                <li>
                                    Use contrasting colours: Pair your pastel eyeliner with a contrasting colour to create a bold statement. For example, if you're using a pastel blue eyeliner, pair it with a bold, contrasting rose gold eyeshadow.
                                </li>
                                <li>
                                    Mix and match: Don't be afraid to experiment with different pastel colours. Try shades like lavender dream, cloud blue, or pretty in pink. You can also mix and match different colours for a fun, playful look.
                                </li>
                                <li>
                                    Highlight with a shimmery shade: To make your pastel eyeliner stand out even more, apply a shimmery highlighter shade like gold to the inner corner of your eyes and under your brow bone.
                                </li>
                                <li>
                                    Keep the rest of your makeup minimal: Since pastel eyeliner is already a statement on its own, keep the rest of your makeup minimal. Opt for a neutral lip colour and light blush to let your eyes do the talking.
                                </li>
                                <li>
                                    Blend with a brush: To achieve a softer, more diffused look, use a small brush to blend out the edges of your eyeliner. This will give you a more natural, smoky effect.
                                </li>
                                <li>
                                    Play with placement: Don't limit yourself to just applying pastel eyeliner on your upper lash line. You can also experiment with different placements, such as applying it in the inner corner of your eye or under your brow bone.
                                </li>
                            </ul>

                        </div>

                    </Col>

                    <Col lg={5} className='order-3 order-lg-4'>
                        <div className="d-flex justify-content-center">

                            <div className='image-wrapper'>
                                <CdnImage ImageClass='w-100 h-100 object-fit-cover' src='/media/common/product-2-1.jpg' className='product-info-image' />
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} className=''>
                        <div className="d-flex justify-content-center">

                            <div className='image-wrapper'>
                                <CdnImage ImageClass='w-100 h-100 object-fit-cover' src='/media/common/product-3-1.jpg' className='product-info-image' />
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} className='ps-lg-5'>
                        <div className="product-detail-wrapper">

                            <Heading title='Product Information' />

                            <div className="d-flex gap-4 flex-column flex-lg-row">

                                <ul>
                                    <li>1 stroke application.</li>
                                    <li>Intense Colour Payoff.</li>
                                    <li>Highly Pigmented.</li>
                                    <li>Long Wear, up to 24 hours.</li>
                                </ul>
                                <ul>
                                    <li>Waterproof.</li>
                                    <li>Sweatproof.</li>
                                    <li>Transfer proof.</li>
                                    <li>Smudge Proof.</li>
                                </ul>
                            </div>

                            <p className="product-note">
                                Vegan, Paraben Free, Silicon Free, No Mineral Oil, No Animal Testing, Cruelty-Free.
                            </p>

                            <div className='extra-detail'>
                                <p>Country of Origin - <strong>India</strong></p>
                                <p>Net Vol - <strong>6ml</strong></p>
                            </div>

                        </div>
                    </Col>

                    <Col lg={12} className='order-5'>

                        <strong>
                            Note
                        </strong>

                        <p className="product-note">
                            For external use only. Avoid direct contact with eyes and keep out of reach of children.
                            Discontinue use if signs of irritation or rash appear. If you are allergic or are under
                            treatment/medication for any skin or hair disorders, you must consult with your healthcare
                            professional before using any of our products. To check for skin sensitivity do a small
                            patch test on the inner elbow. Joon Beauty will not be held responsible for any reactions
                            that occur due to the customer not taking due care.
                        </p>
                    </Col>
                </Row>
            </Container>


        </section>
    )
}

export default ProductInfo