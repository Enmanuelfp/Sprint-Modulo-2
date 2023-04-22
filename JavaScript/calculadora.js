var valorVisor = 0;
var numeroA;
var numeroB;
var operacion;

function boton(dato) {
    var auxiliar = document.getElementById("visor").value; // auxiliar recibe el valor que tenga el visor
    document.getElementById("visor").value = auxiliar + dato; // visor recibe el valor de auxiliar y concatena con dato
    valorVisor = document.getElementById("visor").value = auxiliar + dato;
}


function btn_suma(caracter){
    numeroA = valorVisor;
    operacion = "+";
    
    limpiar();
    //document.getElementById("historico").innerHTML += operacion;
}

function btn_subtrai(caracter){
  numeroA = valorVisor;
  operacion= "-";
  
  limpiar();
}

function btn_multiplica(caracter){
  numeroA = valorVisor;
  operacion = "*";
  
  limpiar();
}

function btn_divide(caracter){
  numeroA = valorVisor;
  oepracion = "/";
  
  limpiar();
}

function reset() {
    // limpar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacion = "";
}
function limpiar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    // hacer el cálculo, obtener el resultado y ponerlo en la pantalla
    //document.getElementById('visor').value = eval(resultado);

    //document.getElementById('visor').value = resultado;
    //document.getElementById('visor').value = eval(valorVisor);

    var total = 0;
    var ultimoTotal = 0;
      switch(operacion){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;

}