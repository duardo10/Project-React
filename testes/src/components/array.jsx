import React, {useState} from "react";

function ListaItens(){
    const [itens, setItens] = useState([])

    const adicionarItem = () =>{
        const novo_item = 'Item ${itens.length + 1}';
        setItens(...itens, novo_item);
    }

    return(
        <div>
            <button onClick={adicionarItem}>Adicionar Item</button>
            <ul>
                {itens.map((item, index) =>{
                    <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default ListaItens;