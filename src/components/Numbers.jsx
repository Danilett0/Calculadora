import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";

// numeros calculadora
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = (onClickNumber) => {
  const BtnNumero = numeros.map((numero) => (
    // retorno botones con numeros y eventos
    <Button
      key={numero}
      text={numero.toString()}
      clickHandler={onClickNumber}
    />
  ));

  return BtnNumero;
};

// componente
const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
