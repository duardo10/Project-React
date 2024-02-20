import React from "react";

function ComponentProps(props){
    return(
        <div>
            <h2>Compoente Filho</h2>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
        </div>
    );
}

export default ComponentProps;