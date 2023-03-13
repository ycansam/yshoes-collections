/* eslint-disable @next/next/no-img-element */
import React from "react";
import Product from "@/models/product.interface";
import styles from './Product.module.css'

const Product: React.FC<Product> = ({ image, name, price, currency }) => {
    return (
        <div className={styles.mainContainer}>
            <img src={image} alt="product image"></img>
            <h4 className={styles.name}>{name}</h4>
            <h4>{price} {currency}</h4>
        </div>
    )
}

export default Product;