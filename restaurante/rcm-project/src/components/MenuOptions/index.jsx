import React from "react";
import './styles.css';
import { MenuClose } from "../MenuClose";

export const MenuOptions = ({ isOpen, clickedMenu }) => {
    return (
        <div className={`options ${isOpen ? 'open' : ''}`}>
            < MenuClose clickedMenu={clickedMenu} />
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </div>  
    );
}