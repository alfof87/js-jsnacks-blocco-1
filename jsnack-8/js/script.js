// Chiedi un numero di 4 cifre all'utente e calcola la somma di
// tutte le cifre che compongono il mnumero

//x += y --->	x = x + y

var numero = prompt("Inserisci un numero a 4 cifre");
var somma 
for (i = 0; i < numero.length; i++){
  somma += parseInt(numero[i]);

}
console.log(somma);
