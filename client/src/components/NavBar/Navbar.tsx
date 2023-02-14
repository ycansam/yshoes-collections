import React from "react";
import styles from "./NavBar.module.css";
import NavBarItems from "./NavBar.items";

interface ItemNavbar {
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
                <img className={styles.logo} alt="logo yshoes" src="https://cdn.shopify.com/s/files/1/0653/9332/8396/files/DALL_E_2022-12-07_20.23.30.png?v=1670444788&width=500"></img>

                {NavBarItems.map((item, index) => {
                    return <ItemNav key={index} name={item.name} path={item.path} />
                })}
            </div>
            <div className={styles.divIcons}>
                <i className="bi bi-search"></i>
                <i className="bi bi-person"></i>
                <i className="bi bi-bag"></i>
            </div>
        </nav>
    )
}

export default NavBar;