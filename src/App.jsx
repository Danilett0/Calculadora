/* eslint no-eval:0 */
import React from "react";
import { useState } from "react";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import words from "lodash.words";
import "./App.css";

const App = () => {
  //instancio hook y asigno un estado inicial en vacio
  const [texto, setTexto] = useState("");

  // separamos los numeros por cada operaciom
  const items = words(texto, /[^-^+^*^/]+/g);

  // si la ultima posicion es mayor a 0 la pone en result si no deja 0
  const valorResult = items.length > 0 ? items[items.length - 1] : 0;

  return (
    <div className="react-calculator">
      {/* le asigno al componente un valor */}
      <Result value={valorResult.toString()} />

      <Numbers
        onClickNumber={(numero) => {
          setTexto(`${texto}${numero}`);
        }}
      />

      <Functions
        onContentClear={(accion) => {
          setTexto("");
        }}
        onDelete={(accion) => {
          if (texto.length > 0) {
            const nuevoTexto = texto.substring(0, texto.length - 1);
            setTexto(`${nuevoTexto}`);
          }
        }}
      />

      <MathOperations
        onClickOperation={(operation) => {
          setTexto(`${texto}${operation}`);
        }}
        onClickEqual={(equal) => {
          setTexto(eval(texto).toString());
        }}
      />
    </div>
  );
};

export default App;
