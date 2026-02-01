import React from 'react'
import CdnImage from './CDNImage'
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className='product-image-wrap'>
        <CdnImage ImageClass='w-100 h-100 object-fit-cover' className='product-image' src='/media/common/product-1.jpg' />
        <span className='product-discount'>
          51% Off
        </span>
        <span className='product-like'>
          <FcLike />
        </span>
      </div>

      <div className="product-detail-wrap">
        <h5 className='product-detail'>
          Soft lavender shade with smooth, richly pigmented application for elegant eye definition.
          Long-lasting and smudge-resistant, it adds a fresh, dreamy touch that stays flawless all day.
        </h5>

        <div className='d-flex justify-content-between mb-3'>
          <p>
            Eyeliners
          </p>

          <div className='d-flex gap-2 align-items-center'>
            <div className='product-rating'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>12</p>
          </div>
        </div>


        <button className='product-btn'>

<div className='d-flex gap-1 align-items-center'>
          <span className='product-price'>
            ₹200
          </span>
           <span className='product-sale-price'>
            ₹200
          </span>
</div>
          ADD TO CART
<BsFillHandbagFill />
        </button>
      </div>
    </div>
  )
}

export default ProductCard