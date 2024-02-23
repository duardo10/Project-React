import React from "react";
import './styles.css';

export const MenuIcone = ({ clickedMenu }) => {
    return (
        <div className="icon" onClick={clickedMenu}>
            <i className="fas fa-bars"></i>
        </div>
    );
}