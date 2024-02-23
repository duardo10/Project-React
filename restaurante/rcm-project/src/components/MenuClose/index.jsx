import React from "react";
import './styles.css';

export const MenuClose = ({ clickedMenu }) => {
    return (
        <div className="close-icon" onClick={clickedMenu}>
            <i className="fas fa-times"></i>
        </div>
    );
}