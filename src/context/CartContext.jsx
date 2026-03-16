import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, qty = 1) => {

        setCart(prev => {
            const existing = prev.find(p => p.id === product.id);

            if (existing) {
                return prev.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + qty }
                        : p
                );
            }

            return [...prev, { ...product, quantity: qty }];
        });

    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id));
    };

    const updateQuantity = (id, qty) => {
        setCart(prev =>
            prev.map(p =>
                p.id === id ? { ...p, quantity: qty } : p
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};