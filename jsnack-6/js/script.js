//Nella pagina c'è un bottone#lanciaMoneta.
//Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
//Se il numero è pari mostra un img con la testa della moneta.
//Se è dispari mostra un'altra img con la croce della moneta.
var btn = document.getElementById('btn');

document.getElementById('btn').addEventListener("click", function (){
  var numCasuale = Math.floor(Math.random()*10);
  console.log(numCasuale);

});
