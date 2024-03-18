/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    function palo= ['PICA', 'CORAZON', 'TREBOL', ''DIAMANTE];
      let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];

    function numero= ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    function generarExcusa() {
       
        let numeroAleatorio = numero[Math.floor(Math.random() * numero.length)];
        let cartaCompleta= paloAleatorio + ' ' + numeroAleatorio + ' ' + paloAleatorio';
        return cartaCompleta;
    }
    let elementoCartaCompleta = document.getElementById('cartaCompleta');
    elementoCartaCompleta.innerHTML = generarCarta();
}
  console.log();
};
