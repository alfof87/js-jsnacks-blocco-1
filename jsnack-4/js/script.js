//Al click su un bottone, il programma genera un numero casuale
//tra 1 e 10. Se il numero è pari, toglie la classe pari
//da p#numero.pari.dispari altrimenti toglie la classe dispari.


document.getElementById('btn').addEventListener("click", function(){
  var etichetta = document.getElementById('numero');
  var numero = Math.floor(Math.random()*10);
 console.log(numero);
 console.log(document.getElementById("numero"));

 document.getElementById("numero").classList.add("pari", "dispari");


if(numero%2 == 1){
  document.getElementById("numero").classList.remove("dispari");
}else {
  document.getElementById("numero").classList.remove("pari");
}

});












//function IsNotUneven(numero)
//{
  //  if (isNaN(numero) == false)
  //  {
  //      return (numero %2 == 1 ?  true : false);
  //  }
  //  else
  //  {
//        return null;
//    }
//}
