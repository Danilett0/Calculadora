/* eslint no-eval:0 */
import React, { useState } from "react";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import Error from "./components/Error";
import "./styles/App.css";

const App = () => {
  const [texto, setTexto] = useState("0");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="react-calculator fadein">
      <Error Type={null} Message={errorMessage} />;
      <Result value={texto} />
      <Numbers
        onClickNumber={(numero) => {
          setTexto(`${texto === '0' ? "" : texto}${numero}`);
        }}
      />
      <Functions
        onContentClear={() => {
          setTexto("");
        }}
        onDelete={() => {
          if (texto.length > 0) {
            const nuevoTexto = texto.substring(0, texto.length - 1);
            setTexto(`${nuevoTexto}`);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setTexto((texto) => `${texto}${operation}`);
        }}
        onClickEqual={() => {
          if (texto.length) {
            try {
              const expression = texto.replace(/\b0+(?=\d)/g, "");
              setTexto(eval(expression).toString());
              setErrorMessage(null);
            } catch {
              setErrorMessage("Ops! parece que hay algo mal en tu operacion.");
            }
          }
        }}
      />
    </div>
  );
};

export default App;
