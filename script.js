let inputActivo = null;
//const txtNum1 = document.getElementById("txtNum1");
//const txtNum2 = document.getElementById("txtNum2");

txtNum1.
txtNum
addEventListener("focus", () => {
    inputActivo = txtNum1;
    inputActivo = txtNum1

});

txtNum2.
    inputActivo = txtNum2;
    inp

var segundoTexto = false;
var operador = "";

function Sumar() {
    segundoTexto = true;
    operador = "+";
    //alert("El resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
}
function Restar() {
    segundoTexto = true;
    operador = "-";
    //alert("El resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
}
function Multiplicar() {
    segundoTexto = true;
    operador = "*";
    //alert("El resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
}
function Dividir() {
    segundoTexto = true;
    operador = "/";
    //alert("El resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
}
function Escribir(numBoton) {
    /*if (inputActvo) {
          imputActuvo.value += numBoton;
      } else {
          alert("selecciona un cuadro de texto ");
      }
  }*/
    if (!segundoTexto) {
        txtNum1.value += numBoton;
    }
    if (segundoTexto) {
        txtNum2.value += numBoton;
    }
}
function Operacion() {
    switch (operador) {
        case "+":
            alert("El resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
            break;
        case "-":
            alert("El resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
            break;
        case "*":
            alert("El resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
            break;
        case "/":
            alert("El resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
            break;
        default:
            break;
    }

}
function Borrador() {
    txtNum1. value = "" ;
    txtNum2.value = "";
    segundoTexto = false;
}


function Eliminar() {
    if (inputActivo) {
        inputActivo.value = inputActivo.value.slice(0, -1);
    }
}
