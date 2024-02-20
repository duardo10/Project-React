import React, {useState} from "react";

function FormularioObjetos(){
    const [formulario, setFormulario] = useState({nome:'', email:''});

    const handleInputChange = (event) =>{
        const {nome, value} = event.target;
        setFormulario({...formulario, [nome]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados do formulario', formulario);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    name="nome"
                    value={formulario.nome}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormularioObjetos;