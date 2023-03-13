'use client';
import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import NavBarItems from "./NavBar.items";
import Link from 'next/link';
import PATHS from "@/utils/PAGE_PATHS";
type ItemNavbar = {
    name: string;
    path: string;
}

// Componente enlace de navegacion
const ItemNav: React.FC<ItemNavbar> = ({ name, path }) => {
    return (
        <a className={styles.itemNav} href={path} target="_self">
            {name}
        </a>
    )
}

// Componente principal nav
const NavBar: React.FC = () => {
    return (
        <nav className={styles.mainContainer}>
            <div>
                <Link href="/">  <img className={styles.logo} alt="logo yshoes" src="https://cdn.shopify.com/s/files/1/0653/9332/8396/files/DALL_E_2022-12-07_20.23.30.png?v=1670444788&width=500"></img></Link>
                {NavBarItems.map((item, index) => {
                    return <ItemNav key={index} name={item.name} path={item.path} />
                })}
            </div>
            <div className={styles.divIcons}>
                <i className="bi bi-search"></i>
                <Link href={PATHS.AUTH.LOGIN}> <i className="bi bi-person"></i></Link>
                <Link href={PATHS.USER.CART}> <i className="bi bi-bag"></i></Link>
            </div>
        </nav>
    )
}

export default NavBar;