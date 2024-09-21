import React from 'react';
import { useState } from 'react';

export const Contador = () => {

    // Inicializamos el estado en 0
    const [valor, setValor] = useState(0);  
    const acumular = (numero) => {
        // Función para modificar el valor
        setValor(valor + numero);  
    };

    return (
        <div>
            <h2>Aprender useState</h2>
            <h3>Contador: <small>{valor}</small></h3>
            <button onClick={() => acumular(1)}>Sumar (+1)</button>
            &nbsp;
            <button onClick={() => acumular(-1)}>Restar (-1)</button>
        </div>
    );
};
