import React, {Component} from "react";


class ComponetEvent extends Component{
    handlechange = () => {
        console.log('Botão Clicado')
    }

    render() {
        return(
            <div>
                <p>Ola</p>
                <button onClick={this.handlechange}>Click aqui</button>
                <input type="text" onChange={this.handlechange} />
            </div>
        );
    }
}

export default ComponetEvent;