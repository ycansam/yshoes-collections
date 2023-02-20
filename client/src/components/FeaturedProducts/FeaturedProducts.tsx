import React from "react";
import FeaturedProductsContents from "./FeaturedProducts.contents";
import Product from "../Product/Product";
import styles from './FeaturedProducts.module.css'
import Button from "../Button/Button";
const FeaturedProducts: React.FC = () => {

    const products = [
        {
            name: "producto 1",
            image: "",
            price: 25.5,
            currency: "EUR"
        },
        {
            name: "producto 1",
            image: "",
            price: 25.5,
            currency: "EUR"
        },
        {
            name: "producto 1",
            image: "",
            price: 25.5,
            currency: "EUR"
        },
        {
            name: "producto 1",
            image: "",
            price: 25.5,
            currency: "EUR"
        }
    ]

    return (
        <div className={styles.mainContainer}>
            <h1>{FeaturedProductsContents.featuredProducts.h1}</h1>
            <div className={styles.containerProducts}>
                {products.map((product, index) => {
                    return <Product
                        key={index}
                        image={product.image}
                        name={product.name}
                        currency={product.currency}
                        price={product.price}
                    />
                })}
            </div>
            <button className="btn-2">{FeaturedProductsContents.featuredProducts.btn}</button>
        </div>
    )
}

export default FeaturedProducts;