alert("Preventivo prezzo biglietto");
var km = prompt("Quanti Km vuoi percorrere?");
var age= prompt("Quanti anni hai?");

var prezzo = km * 0.21;
var saleMin = prezzo - prezzo/100*20;
var saleMax = prezzo - prezzo/100*40;


if (age < 18){
    document.getElementById("prezzo").innerHTML = saleMin + " €";
}
else{ if( age >= 65 ){
    document.getElementById("prezzo").innerHTML = saleMax + " €";

}else
{
    document.getElementById("prezzo").innerHTML = prezzo + " €";

}


}

