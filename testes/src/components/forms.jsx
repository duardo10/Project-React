import React, {Component} from "react";

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            email: '',
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.nome]: event.target.value});
    }

    handleSubmit = (event) => {
        event.prevenntDefault();
        console.log("Nome:", this.state.nome);
        console.log("Nome:", this.state.email);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default Formulario;