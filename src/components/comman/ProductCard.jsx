
import React, { useState } from 'react'
import CdnImage from './CDNImage'
import { FcLike } from "react-icons/fc";
import { BsFillHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Toast } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

const ProductCard = ({
  id,
  image,
  discount,
  liked,
  description,
  category,
  rating,
  reviews,
  price,
  salePrice,
  bgColor,
}) => {

  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {

    const product = {
      id,
      image,
      shortDescription: description,
      category,
      price,
      salePrice
    };

    addToCart(product, 1);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <div className={`product-card ${bgColor}`}>

        <Link to={`/product-detail/${id}`}>

          <div className="product-image-wrap">

            <CdnImage
              ImageClass="w-100 h-100 object-fit-cover"
              className="product-image"
              src={image}
            />

            {discount && (
              <span className="product-discount">
                {discount}% Off
              </span>
            )}

            {liked && (
              <span className="product-like">
                <FcLike />
              </span>
            )}

          </div>

        </Link>


        <div className="product-detail-wrap">

          <h5 className="product-detail">
            {description}
          </h5>

          <div className="d-flex justify-content-between mb-3">

            <p>{category}</p>

            <div className="d-flex gap-2 align-items-center">

              <div className="product-rating">

                {[...Array(5)].map((_, i) => {

                  const starValue = i + 1;

                  if (rating >= starValue) {
                    return (
                      <svg key={i} width="14" height="14" viewBox="0 0 15 15">
                        <path fill="#ffa600" d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5l5,3.5l-2-6l4-3.5h-5L7.5,0z" />
                      </svg>
                    );
                  }

                  if (rating >= starValue - 0.5) {
                    return (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24">
                        <g fillRule="evenodd">
                          <polygon fill="#ffa600" points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2" />
                          <polygon fill="#000000" points="12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22" />
                        </g>
                      </svg>
                    );
                  }

                  return (
                    <svg key={i} width="14" height="14" viewBox="0 0 15 15">
                      <path fill="#000000" d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5l5,3.5l-2-6l4-3.5h-5L7.5,0z" />
                    </svg>
                  );

                })}

              </div>

              <p>{reviews}</p>

            </div>

          </div>


          <button className="product-btn" onClick={handleAddToCart}>

            <div className="d-flex gap-1 align-items-center">

              {salePrice && (
                <span className="product-price">₹{salePrice}</span>
              )}

              <span className="product-sale-price">₹{price}</span>

            </div>

            ADD TO CART
            <BsFillHandbagFill />

          </button>

        </div>

      </div>


      {/* Toast Popup */}

      <div className='toaster'>
        <Toast show={showToast} bg="success">
          <Toast.Body className="text-white text-center">
            Product added to cart
          </Toast.Body>
        </Toast>
      </div>

    </>
  )
}

export default ProductCard
