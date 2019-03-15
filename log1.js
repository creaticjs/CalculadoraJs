var concatenacion= "";  //concatena todo el string que digita el usuario
var numerosAOperar= []; //almacena 2 valores, numero 1 y numero 2 para oeprar
var bandera = 0;        //Permite saber cuantas veces han presionado una operacion
var signo=[];     //almacena el signo actual para operar y el signo siguiente para una posterior operacion
var res="";
var signoSiguiente;

function modificarBandera(operacion){
  bandera += 1; //cada vez que se presiona una operacion aumenta en 1
  signo.push(operacion); //guardamos los signos [0]actual y [1]siguiente
  console.log("bandera es:" ,bandera);
  if(operacion === "="){
    alert("signo igual");
    mostrarEnPantalla("");
  }else {
      mostrarEnPantalla(operacion);//mostrar el resultado de la operacio
  }
}

var resultado = document.getElementById("result"); //recuperar el espacio de html donde mostraremos resultados

function siguienteSignoIgual(){
  if(signo[1] === "="){
    resultado.innerHTML = res;
    concatenacion = res.toString();
    bandera=0;
    signo=[];
    //signo.push(signo[1]);
  }else if(signo[1] === null){
    resultado.innerHTML = res;
    concatenacion = res.toString();
    bandera=0;
    signo=[];
  }else{
    resultado.innerHTML = res + signo[1];
    concatenacion = res.toString() + signo[1];
    bandera=1;
    signo=[];
    signo.push(signo[1]);
  }

  if(signo[1]!== null && signoSiguiente!== null){
    signo =[];
    signo.push(signoSiguiente);
    console.log("next",signoSiguiente)
  }

 console.log("bandera luego de operar",bandera);
 console.log("signo luego de operar", signo);

}
function mostrarEnPantalla(mensaje){
    if(bandera<2){
      resultado.innerHTML += mensaje; //concatenamos en mostrarEnPantalla
      concatenacion += mensaje;       //concatenamos cada mensaje con nuestra var concatenacion
      console.log("la concatenacion es:",concatenacion);
      console.log("el signo es:",signo);
    }

else if(bandera===2){                 //si se presentan dos operacion
      numerosAOperar = concatenacion.split(signo[0]);

      if(signo[1]!== "="){
        signoSiguiente = signo[1];
      }
      var n1 = parseInt(numerosAOperar[0]);
      var n2 = parseInt(numerosAOperar[1]);
      console.log("valores operar:",numerosAOperar,"n1:",n1," y n2: ", n2);
      if(signo[0]==="+"){
        res = n1 + n2;console.log("mostrar suma",res);
        siguienteSignoIgual();}
      else if(signo[0]==="-"){
        res = n1 - n2;console.log("mostrar resta",res);
        siguienteSignoIgual();}
      else if(signo[0]==="*"){
        res = n1 * n2;console.log("mostrar mul",res);
        siguienteSignoIgual();}
      else if (signo[0]==="/"){
        res = n1 / n2;console.log("mostrar div",res);
        siguienteSignoIgual();}

}
}
