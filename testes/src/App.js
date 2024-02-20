// Arquivo: App.js

import React from 'react';
import MeuComponente from './components/teste'; // Importe o componente MeuComponente
import ComponenteClasse from './components/classe';
import Contador from './components/state';
import Formulario from './components/forms';
import ListaItens from './components/array';
import FormularioObjetos from './components/objetos';
import AppProps from './components/app';
import ComponetEvent from './components/events';
import { MeusHooks, Tema, Timer } from './components/hooks';

function App() {
    return (
        <div>
            <h1>Meu App React</h1>
            <MeuComponente /> {/* Renderize o componente MeuComponente aqui */}
            <ComponenteClasse />
            <Contador />
            <Formulario />
            <ListaItens />
            <FormularioObjetos />
            < AppProps />
            < ComponetEvent />
            <section>
                < MeusHooks />
                <Timer />
                <Tema />
            </section>
        </div>
    );
}

export default App;