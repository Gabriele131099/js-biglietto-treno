function anno() {
    var age =2021 -  document.getElementById("anno").value  ;
    var km = 100;

    var prezzo = km * 0.21;
    var saleMin = prezzo - prezzo/100*20;
    var saleMax = prezzo - prezzo/100*40;


    if (age < 18){
        document.getElementById("costo").innerHTML = saleMin + " €";
    }
    else{ if( age >= 65 ){
        document.getElementById("costo").innerHTML = saleMax + " €";
    
    }else
    {
        document.getElementById("costo").innerHTML = prezzo + " €";
    
    }
    
    
    }
}


