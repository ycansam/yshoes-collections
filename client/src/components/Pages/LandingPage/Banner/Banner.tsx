import React from "react";
import styles from "./Banner.module.css";
import BannerContents from "./Banner.contents";

const Banner: React.FC = () => {

    return (
        <div className={styles.mainContainer}>
            
            <div className={styles.contents}>
                <h1>{BannerContents.banner.h1}</h1>
                <p>{BannerContents.banner.p}</p>
                <button className="btn-1">{BannerContents.banner.btn}</button>
            </div>
        </div>
    )
}

export default Banner;