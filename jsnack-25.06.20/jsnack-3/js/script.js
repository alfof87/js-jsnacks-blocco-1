// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.


somma = 0;

for(i = 0; i < 5; i++){
var num = prompt("inserisci il numero");
somma += parseInt(num);
  //console.log(parseInt(num));

}
console.log(somma);
