


document.getElementById('btn').addEventListener("click", function(){
  var numeroCasuale = Math.random()*10);
})

function IsNotUneven(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}
