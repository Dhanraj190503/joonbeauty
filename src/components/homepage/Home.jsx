import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from '../comman/PageHeader'
import ProductCard from '../comman/ProductCard'

const Home = () => {

const bgColor = ['green', 'blue', 'mango', 'violet', 'skin'];

let lastColor = null;

const setbgColor = () => {
  let newColor;

  do {
    newColor = bgColor[Math.floor(Math.random() * bgColor.length)];
  } while (newColor === lastColor);

  lastColor = newColor;
  return newColor;
};


  const products = [
    {
      id: 1,
      image: "/media/common/product-1.jpg",
      // discount: 51,
      liked: true,
      description: "Soft lavender shade with smooth, richly pigmented application",
      category: "Eyeliners",
      rating: 5,
      reviews: 12,
      price: 200,
      salePrice: 299,
      isActive: true
    },
    {
      id: 2,
      image: "/media/common/product-2.jpg",
      discount: 45,
      liked: true,
      description: "Long-lasting eyeliner with intense color payoff",
      category: "Eyeliners",
      rating: 3.5,
      reviews: 8,
      price: 180,
      salePrice: 249,
      isActive: true
    },
    {
      id: 3,
      image: "/media/common/product-3.jpg",
      discount: 30,
      liked: true,
      description: "Smudge-proof formula for all-day wear",
      category: "Eyeliners",
      rating: 3,
      reviews: 20,
      price: 220,
      salePrice: 299,
      isActive: true
    }
  ]

  return (
    <section className="home">
      <div className="page-hedaer-wrappper">
        <Container>
          <Row className="align-items-center gy-4">

            <Col lg={6}>
              <PageHeader
                title="JoonBeauty Product"
                breadcrumb={[
                  { pageLink: '/', subPage: 'Home' },
                  { pageLink: '', subPage: 'All Product' }
                ]}
              />
            </Col>

            <Col lg={6}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam cupiditate sapiente ipsum illo quas ab?
              </p>
            </Col>

            <Col lg={12}>
              <p>Showing 1 to {products.length} out of {products.length} products.</p>
            </Col>

            {/* PRODUCT LIST */}
            {products.map(product => (
              <Col lg={4} key={product.id}>
                <ProductCard
                  image={product.image}
                  discount={product.discount}
                  liked={product.liked}
                  description={product.description}
                  category={product.category}
                  rating={product.rating}
                  reviews={product.reviews}
                  price={product.price}
                  salePrice={product.salePrice}
                  isActive={product.isActive}
                  bgColor={setbgColor()}   
                  onAddToCart={() => alert('Added to Cart.')}
                />
              </Col>
            ))}

          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Home
