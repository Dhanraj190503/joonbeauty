import React from 'react'
import CdnImage from './CDNImage'
import { FcLike } from "react-icons/fc";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";

const ProductCard = ({
  image,
  discount,
  liked,
  description,
  category,
  rating,
  reviews,
  price,
  salePrice,
  onAddToCart,
  bgColor,
}) => {
  return (
    <div className={`product-card ${bgColor}`}>
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
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#ffa600"
                        d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5l5,3.5l-2-6l4-3.5h-5L7.5,0z"
                      />
                    </svg>
                  );
                }

                if (rating >= starValue - 0.5) {
                  return (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="evenodd">
                        <polygon
                          fill="#ffa600"
                          points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"
                        />
                        <polygon
                          fill="#000000"
                          points="12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"
                        />
                      </g>
                    </svg>
                  );
                }

                return (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5l5,3.5l-2-6l4-3.5h-5L7.5,0z"
                    />
                  </svg>
                );
              })}
            </div>


            <p>{reviews}</p>
          </div>
        </div>

        <button className="product-btn" onClick={onAddToCart}>
          <div className="d-flex gap-1 align-items-center">
            <span className="product-price">₹{price}</span>
            {salePrice && (
              <span className="product-sale-price">₹{salePrice}</span>
            )}
          </div>
          ADD TO CART
          <BsFillHandbagFill />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
