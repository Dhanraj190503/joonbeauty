import React, { useState, useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../comman/Heading'
import ProductCard from '../comman/ProductCard'
import CdnImage from '../comman/CDNImage'
import { FaChevronDown } from "react-icons/fa";

const Home = () => {

  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

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

  const handleSortChange = (value) => {
    if (selectedSort.includes(value)) {
      setSelectedSort(selectedSort.filter(item => item !== value));
    } else {
      setSelectedSort([...selectedSort, value]);
    }
  };

  const filteredProducts = useMemo(() => {

    let filtered = [...products];

    if (activeCategory !== "All") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (selectedSort.includes("Best Rating")) {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (selectedSort.includes("Price Low - High")) {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (selectedSort.includes("Price High - Low")) {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (selectedSort.includes("Newest")) {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;

  }, [selectedSort, activeCategory]);

  return (
    <section className="home">
      <div className="page-hedaer-wrappper">
        <CdnImage className='bg-image' ImageClass='w-100 h-100 object-fit-cover object-position-right' src='/media/common/header-bg.png' />
        <Container>
          <Row>
            <Col lg={6}>
              <Heading
                title="All Products"
                breadcrumb={[
                  { pageLink: '/', subPage: 'Home' },
                  { pageLink: '', subPage: 'All Products' }
                ]}
              />
            </Col>

            <Col lg={6}>
              <p className='pb-3'>
                Ready to let loose youe inner rebel and ignite your unique style with makeup? Get ready to unleash your individuality, have a blast, and paint the town colourful!
              </p>

              <p>
                Whether you're looking for a sultry glittery eye, ro a playfullpastel statement, we'vegot you covered.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className=" py-4 gy-4">
          <Col lg={12}>

            <div className="sort-wrapper">

              <div className="sort-btn-wrapper">

                <button
                  className={`sort-btn ${activeCategory === "All" ? "_active" : ""}`}
                  onClick={() => setActiveCategory("All")}
                >
                  All
                </button>

                <button
                  className={`sort-btn ${activeCategory === "Eyeliners" ? "_active" : ""}`}
                  onClick={() => setActiveCategory("Eyeliners")}
                >
                  Eyeliners
                </button>

                <button
                  className={`sort-btn ${activeCategory === "Eyeshadow" ? "_active" : ""}`}
                  onClick={() => setActiveCategory("Eyeshadow")}
                >
                  Eyeshadow
                </button>

                <button
                  className={`sort-btn ${activeCategory === "Combos" ? "_active" : ""}`}
                  onClick={() => setActiveCategory("Combos")}
                >
                  Combos
                </button>

                <button
                  className={`sort-btn ${activeCategory === "Lipstick" ? "_active" : ""}`}
                  onClick={() => setActiveCategory("Lipstick")}
                >
                  Lipstick
                </button>

              </div>

              <div className="select-format">

                <div className="sort-wrap">

                  <div
                    className="select-sort"
                    onClick={() => setOpenSort(!openSort)}
                  >
                    Sort <FaChevronDown />
                  </div>

                  <span
                    className="reset-sort"
                    onClick={() => {
                      setSelectedSort([])
                      setOpenSort(false)
                    }}
                  >
                    Reset
                  </span>

                  {openSort && (
                    <div className="sort-dropdown">

                      <label>
                        <input
                          type="checkbox"
                          checked={selectedSort.includes("Newest")}
                          onChange={() => handleSortChange("Newest")}
                        />
                        Newest
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          checked={selectedSort.includes("Best Rating")}
                          onChange={() => handleSortChange("Best Rating")}
                        />
                        Best Rating
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          checked={selectedSort.includes("Price Low - High")}
                          onChange={() => handleSortChange("Price Low - High")}
                        />
                        Price Low - High
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          checked={selectedSort.includes("Price High - Low")}
                          onChange={() => handleSortChange("Price High - Low")}
                        />
                        Price High - Low
                      </label>

                    </div>
                  )}

                </div>

              </div>

            </div>

            <p className='product-count'>
              Showing 1 to {filteredProducts.length} out of {products.length} products.
            </p>

          </Col>

          {filteredProducts.map(product => (
            <Col lg={4} key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                discount={product.discount}
                liked={product.liked}
                description={product.shortDescription}
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
    </section>
  )
}

export default Home