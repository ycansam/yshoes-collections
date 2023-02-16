import React from "react";

interface ButtonIF {
    text: string;
    className: string;
    onClick: () => {}
}

const Button: React.FC<ButtonIF> = ({ text, onClick, className = "btn-1" }) => {

    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;