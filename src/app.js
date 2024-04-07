/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

function generarCarta() {
  let numeroPalo = generarNumeroAleatorio(0, 3);
  let numeroCarta = generarNumeroAleatorio(0, 12);
  let palos = ["corazones", "picas", "treboles", "diamantes"];
  let valorCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  document.getElementById("parteSuperior").className = palos[numeroPalo];
  document.getElementById("parteInferior").className = palos[numeroPalo];
  document.getElementById("parteCentral").textContent = valorCarta[numeroCarta];

  function generarNumeroAleatorio(rangoInferior, rangoSuperior) {
    // +1 asegura que el rango superior sea inclusivo
    return (
      Math.floor(Math.random() * (rangoSuperior - rangoInferior + 1)) +
      rangoInferior
    );
  }
}
window.generarCarta = generarCarta;
window.onload = function() {
  generarCarta();
};
