import React from "react";
import { MenuIcone } from "../Menu-Icone";
import './styles.css';

export const MenuHeader = ({ isOpen, clickedMenu }) => {
    return (
        <div className={`header ${isOpen ? 'open' : ''}`}>
            <MenuIcone  clickedMenu={clickedMenu} />
            <h4>Delivery Ed & Cris</h4>
        </div>
    );
}; 