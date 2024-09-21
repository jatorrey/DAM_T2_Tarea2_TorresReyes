import React, { useState } from 'react';

const IncisoD = () => {
  const [result, setResult] = useState(null);

  // Función que suma dos números y retorna el resultado
  const sumarNumeros = (num1, num2) => {
    return num1 + num2;
  };

  // Manejar la acción de sumar con números de ejemplo
  const handleSum = () => {
    const resultado = sumarNumeros(5, 10); // Ejemplo de sumar 5 y 10
    setResult(resultado);
  };

  return (
    <div>
      <h2>Funciones de Retorno y Argumentos</h2>
      <p>
        En este ejemplo, sumamos dos números utilizando una función que 
        toma argumentos y devuelve un resultado.
      </p>
      <button onClick={handleSum}>Sumar 5 + 10</button>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
};

export default IncisoD;
