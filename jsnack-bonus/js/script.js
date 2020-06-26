//Nella pagina c'è un bottone#lanciaMoneta.
//Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
//Se il numero è pari mostra un img con la testa della moneta.
//Se è dispari mostra un'altra img con la croce della moneta.
var btn = document.getElementById('btn');

document.getElementById('btn').addEventListener("click", function (){
  var numero = Math.floor(Math.random()*10);
  console.log(numero);
  document.getElementById("numero").classList.add("pari", "dispari");
  if(numero%2 == 1){
  document.getElementById("numero").classList.remove("dispari");
}else {
  document.getElementById("numero").classList.remove("pari");
}

});
