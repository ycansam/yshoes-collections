'use client';
import React from "react";

type TButton = {
    text: string;
    className: "btn-1" | "btn-2";
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<TButton> = ({ text, onClick, className = "btn-1", type = 'button' }) => {

    return (
        <button type={type} className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;