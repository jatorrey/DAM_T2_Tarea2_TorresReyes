// src/App.jsx
import React, { useState } from 'react';
import incisoAData from './components/incisoA';
//Importacion del IncisoB
import IncisoB from './components/incisoB';
//Importacion del IncisoC
import IncisoC from './components/incisoC'; 
//Importacion del IncisoD
import IncisoD from './components/incisoD';
//Importacion del IncisoE
import { Contador } from './components/incisoE';
//Importacion del IncisoF
import { ContadorHook } from './components/incisoF';
//Importacion del inciso G
import { IncisoG } from './components/incisoG';

const App = () => {
  // Estado para cambiar entre incisos
  const [inciso, setInciso] = useState(0); 
  //Renderizar el inciso seleccionado
  const renderInciso = () => {
    switch (inciso) {
      case 1:
        return (
          <div>
            <h2>{incisoAData.title}</h2>
            <p>{incisoAData.description}</p>
            <ul>
              {incisoAData.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        );
      //Agregando el caso 2 para inciso B
      case 2:
        return <IncisoB />;
      //Agregando el caso 3 para inciso C
      case 3:
        return <IncisoC />;
      //Agregando el caso 4 para inciso D
      case 4:
        return <IncisoD />;
      //Agregando el caso 5 para inciso E
      case 5:
        return <Contador/>;
      //Agregando el caso 6 para inciso F
      case 6:
        return <ContadorHook/>
      //Agregando el caso 7 para inciso G
      case 7:
        return <IncisoG/>
      default:
        return <h2>Selecciona un inciso para mostrar su contenido.</h2>;
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Incisos</h1>
        {/* Agregando los botones para acceder */}
        <button onClick={() => setInciso(1)}>Inciso A</button>
        {/* Boton funcional para el inciso B*/}
        <button onClick={() => setInciso(2)}>Inciso B</button>
        {/* Boton funcional para el inciso C*/}
        <button onClick={() => setInciso(3)}>Inciso C</button>
        {/* Boton funcional para el inciso D*/}
        <button onClick={() => setInciso(4)}>Inciso D</button>
        {/* Boton funcional para el inciso E*/}
        <button onClick={() => setInciso(5)}>Inciso E - Contador</button>
        {/* Boton funcional para el inciso F*/}
        <button onClick={() => setInciso(6)}>Inciso F - ContadorHook</button>
        {/* Boton funcional para el inciso G*/}
        <button onClick={() => setInciso(7)}>Inciso G - useReducer</button>
      </div>
      <div className="content">
        {renderInciso()}
      </div>
    </div>
  );
};

export default App;
