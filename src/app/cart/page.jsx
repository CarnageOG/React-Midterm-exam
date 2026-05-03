"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Page = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCart = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/carts/1");
                const result = await res.json();
                const productsWithDetails = await Promise.all(
                    result.products.map(async (item) => {
                        const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
                        const productData = await res.json();
                        return {
                            ...productData,
                            quantity: item.quantity,
                        };
                    })
                );
                setCart(productsWithDetails);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getCart();
    }, []);

    if (loading) {
        return <div className={styles.error_loading}>LOADING</div>;
    }

    if (error) {
        return (
            <div className={styles.error_loading}>
                Something went wrong
            </div>
        );
    }

    return (
        <div className={styles.div_layout}>
            <div className={styles.cart_wrapper}>
                <h1 className={styles.cart_h1}>Shoping cart</h1>
                <div className={styles.div_cart}>
                    {cart.map((cart) => (
                        <div className={styles.div_cart_sum} key={cart.id}>
                            <div className={styles.div_product}>
                                <img src={cart.image} alt={cart.title} width={50} />
                                <h3 className={styles.cart_h3}>{cart.title}</h3>
                            </div>
                            <div className={styles.div_quan}>
                                <p>{cart.quantity}</p>
                            </div>
                            <div className={styles.div_price}>
                                <p>{cart.price} $</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;