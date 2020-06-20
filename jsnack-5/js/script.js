//Nella pagina ci sono due input(num1, num2) e una select con options
//(somma,sottrai,moltiplica,dividi).
//Al click su un bottone, il programma inserisce in un p#result il risultato
//dell'operazione scelta.
var btn = document.getElementById("btn");

document.getElementById("btn").addEventListener("click", function(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var op = document.getElementById("operazioni").value;
  var result = document.getElementById('result');
//  var somma = document.getElementById('somma') = num1 + num2;
//  var sottrazione = document.getElementById('sottrazione') = num1 - num2;
//  var moltiplicazione = document.getElementById('moltiplicazione') = num1 * num2;
//  var divisione = document.getElementById('divisione') = num1 / num2;
//  var result = document.getElementById('result') =

  if (op == somma){
    result.innerHTML = num1 + num2;
  }else if (op == sottrazione) {
    result.innerHTML = num1 - num2;
  }else if (op == moltiplicazione) {
    result.innerHTML = num1 * num2;
  }else {
    result.innerHTML = num1 / num2;
  }


});
