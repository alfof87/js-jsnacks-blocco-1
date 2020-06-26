//Crea un array vuoto, chiedi per 6 volte all'utente di inserire
//un numero, se è dispari inseriscilo nell'array.

var cont = []

for (i = 0; i < 6; i++){
  var num = prompt("Inserisci un numero");
  if(num%2 == 1){
    cont.push(num);
  }else{
    console.log("il numero è pari");
  }
}

console.log(cont);



































// var num = [];
//
// for(i = 0; i < 6; i++){
//   var chiediNum = prompt("Inserisci il numero");
//   var pari = num%2 == 1;
//   var dispari = num%2 == 0;
// if(num == dispari){
//   num.push(dispari);
//   console.log(num);
// }
// }
