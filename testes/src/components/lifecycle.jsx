import React from "react";

class MeuComponenteLife extends React.Component {
    componentDidMount(){
        console.log('Componente criado');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Componente atualizado');
    }

    componentWillUnmount(){
        console.log('Componente desmontado');
    }

    render() {
        return(
            <div>
                <h1>Meu Componente</h1>
            </div>
        );
    }
}

export default MeuComponenteLife;