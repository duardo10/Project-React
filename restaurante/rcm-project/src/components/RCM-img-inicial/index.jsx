import React from "react";
import './styles.css';
import imagem from '../../images/Restaurante.jpeg'

export const ImgInicial = () => {
    return (
        <div className="img-inicial">
            <img src={imagem} alt="Imgagem inicial" />
        </div>
    );
}