import React, {useState, useEffect, useContext} from "react";


export function MeusHooks(){
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button type="button" onClick={incrementarContador}>Contar</button>
        </div>
    );
}

export function Timer(){
    const [segundos, setsegundos] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setsegundos(segundos => segundos + 1);
        }, 1000);

        return() => clearInterval(timerId);
    }, []);

    return(
        <div>
            <p>Tempo decorrido {segundos} segundos</p>
        </div>
    );
}

const ThemeContext = React.createContext('ligth');

export function Tema(){
    return(
        <ThemeContext.Provider value="dark">
            <Toolbat />
        </ThemeContext.Provider>
    );
}

export function Toolbat(){
    const theme = useContext(ThemeContext);
    return(
        <div>
            <p>Tema: {theme}</p>
        </div>
    );
}
