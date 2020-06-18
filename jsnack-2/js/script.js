//L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.
 var nome;
 var cognome;
 

 btn.addEventListener("click", function(){
   var nome = document.getElementById("nome").value;
   var cognome = document.getElementById("cognome").value;
   var btn = document.getElementById("btn").value;
   document.getElementById("risultato").innerHTML = "risultato: " + nome + " " + cognome;
 })
