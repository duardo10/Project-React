import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css'
import { MenuHeader } from "../Menu-header";
import { MenuOptions } from "../MenuOptions";

export const Menu = () => {
    const [isOpen, setOpen] = useState(false);

    const clickedMenu = () => {
        setOpen(!isOpen);
    }

    return (
        <nav className="menu">
            < MenuHeader isOpen={isOpen} clickedMenu={clickedMenu} />
            < MenuOptions isOpen={isOpen} clickedMenu={clickedMenu} />
        </nav>
    );
}
