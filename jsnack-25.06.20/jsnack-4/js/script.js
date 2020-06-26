// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var nomiInvitati = ["Marco", "Pippo","Aldo","Bob"];

var nome = prompt("Inserisci il nome");

for (i = 0; i < nomiInvitati.length; i++ ){
  if(nome == nomiInvitati[i]){
    console.log("Puoi entrare");
  }else{
    console.log("Non puoi entrare");
  }
}












// var nome = prompt("Inserisci il nome");
// var listaNomi = ["Marco", "Paolo", "Stefano", "Aldo"];
//
//
// for (i = 0; i < listaNomi.length; i++){
//  if (nome == listaNomi[i]){
//    console.log("Puoi partecipare");
//  }else {
//    console.log("Non puoi partecipare");
//  }
// }
