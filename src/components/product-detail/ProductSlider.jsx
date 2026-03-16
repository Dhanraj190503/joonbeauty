import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "../comman/ProductCard";

const ProductSlider = () => {

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


    return (
        <section className="product-slider">
            {/* <div className="container"> */}
            <Splide
                options={{
                    type: "loop",
                    perPage: 4,
                    perMove: 1,
                    gap: "20px",
                    arrows: false,
                    pagination: false,
                    autoplay: true,
                    interval: 3000,
                    breakpoints: {
                        1200: {
                            perPage: 3,
                        },
                        992: {
                            perPage: 2,
                        },
                        576: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {products.map((product) => (
                    <SplideSlide key={product.id}>
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
                            onAddToCart={() => alert("Added to Cart.")}
                        />
                    </SplideSlide>
                ))}
            </Splide>
            {/* </div> */}
        </section>
    );
};

export default ProductSlider;