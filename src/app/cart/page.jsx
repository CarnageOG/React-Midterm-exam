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
                setCart(result);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getCart();
    }, []);

    if (loading) {
        return (
        <div className={styles.error_loading}>LOADING</div>
        );
    }

    if (error) {
        return (
            <div className={styles.error_loading}>Something went wrong</div>
        );
    }

    return (
        <div className={styles.div_layout}>
            {cart?.products?.map((item) => (
                <div key={item.productId}>
                    <h2>{item.productId}</h2>
                    <p>{item.quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default Page;