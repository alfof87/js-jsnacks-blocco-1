//Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.




btn.addEventListener("click", function(){
  var par = document.getElementById('par');
  var numero = prompt("Inserisci un numero").value;
  if(numero > 0){
   par.className = par.className + "green";
  } else if(numero < 0){
    par.classname = par.className + "red";
  } else{
    par.classname = par.className + "blue";
  }
});
