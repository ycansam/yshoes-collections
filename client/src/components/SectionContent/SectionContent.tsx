import React from "react";
import { ReactPropTypes } from "react";
import styles from './SectionContent.module.css'
interface Content {
    title: string;
    paragraph: string;
    btnText?: string; // no es requerido
}

const SectionContent: React.FC<Content> = ({ title, paragraph, btnText }) => {

    return (
        <div className={styles.mainContainer}>
            <h1> {title}</h1>
            <p>{paragraph}</p>
            {btnText && <button> {btnText}</button>}
        </div>
    )
}

export default SectionContent;