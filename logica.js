var numerosAOperar= []; //almacena 2 valores, numero 1 y numero 2 para oeprar
var bandera = 0;        //Permite saber cuantas veces han presionado una operacion
var signo=[]    //almacena el signo actual para operar y el signo siguiente para una posterior operacion
var res="";
var signoSiguiente;
var resultado = document.getElementById("result"); //recuperar el espacio de html donde mostraremos resultados


function modificarBandera(operacion){
  //validacion de la entrada de signo
  if(resultado.innerHTML ===""){
    alert("Debes escribir un numero antes de la operacion");
  }else{
    bandera += 1; console.log("bandera es:" ,bandera);//cada vez que se presiona una operacion aumenta en 1
    signo.push(operacion); //guardamos los signos [0]actual y [1]siguiente

      switch (operacion) {
      case '=': if(bandera==1){
      borrarBanderaSigno();
      }else{
        console.log('calcular, el segundo operador es el =');
        calcularOperacion();
      }
      break;
      default:
        if(bandera===1){
          resultado.innerHTML += operacion;
        }else{
          console.log('calcular operacion');
          calcularOperacion();
        }
      }
  }
}

function mostrarEnPantalla(mensaje){
  resultado.innerHTML += mensaje;
}

function calcularOperacion(){
  console.log("signo0=",signo[0],"  signo1=",signo[1]);
  var cadena = resultado.innerHTML;
  numerosAOperar = cadena.split(signo[0]);
  console.log("cadena: " + cadena);
  var num1 = parseFloat(numerosAOperar[0]);
  var num2 = parseFloat(numerosAOperar[1]);
  console.log("num1:" + num1 + "num2:" + num2);
  if(typeof(num1)==="number" && typeof(num2)==="NanN"){
    alert("ambos son numeros");
  }else{
    alert("operacion invalida");
  }
  if(parseFloat(numerosAOperar[1])!= "."){
    res = operarConSigno(parseFloat(numerosAOperar[0]),parseFloat(numerosAOperar[1]),signo[0]);
  }else{
    alert("No es posible hacer la operacion" + cadena);
    resultado.innerHTML = "";
    borrarBanderaSigno();
  }

  if(res!="error"){
    if(signo[1]!= "="){
      console.log("operacion diferente de igual");
      resultado.innerHTML = res + signo[1];
      signoSiguiente = signo[1];
      signo=[];
      signo.push(signoSiguiente);
      bandera=1;
    }else{
      console.log("operacion igual");
      resultado.innerHTML = res;
      borrarBanderaSigno();
    }
  }else{
    eliminarCaracter();
    bandera=1;
  }


}

function operarConSigno(n1,n2,operador){
  console.log("n1: " + n1 + "   n2:" + n2);
  switch (operador) {
    case '+': return n1 + n2;
    break;
    case '-': return n1 - n2;
    break;
    case '*': return n1 * n2;
    break;
    case '/':
    if(n2===0){
      alert("No es posible dividir por Cero: " + n1 + " / " + n2);
      return "error"
    }else{

      return n1/n2;
    }
    break;
    default: return "error"

  }
}

function eliminarCaracter(){
  var recortarCadena = resultado.innerHTML;
  var n = recortarCadena.length;
  resultado.innerHTML = recortarCadena.substr(0,(n-1));
  if(bandera===1){
    borrarBanderaSigno();
  }
}

function eliminarTodo(){
  resultado.innerHTML = "";
  borrarBanderaSigno();

}

function borrarBanderaSigno(){
  bandera=0;
  signo=[];
}
