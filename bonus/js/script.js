function anno() {
    var age =2021 -  document.getElementById("anno").value  ;
    var km = 100;
    var narnia = 0.9;
    var blade = 0.7;
    var maze = 0.8;
    var prezzo = km * 0.21;
    var saleMin = prezzo - prezzo/100*20;
    var saleMax = prezzo - prezzo/100*40;


    if (age < 18){
        document.getElementById("costo").innerHTML = saleMin + " €";
        document.getElementById("narnia").innerHTML = saleMin*narnia + " €";
        document.getElementById("maze").innerHTML = saleMin*maze + " €";
        document.getElementById("blade").innerHTML = saleMin*blade + " €";



    }
    else{ if( age >= 65 ){
        document.getElementById("costo").innerHTML = saleMax + " €";
        document.getElementById("narnia").innerHTML = saleMax*narnia + " €";
        document.getElementById("maze").innerHTML = saleMax*maze + " €";
        document.getElementById("blade").innerHTML = saleMax*blade + " €";



    }else
    {
        document.getElementById("costo").innerHTML = prezzo + " €";
        document.getElementById("narnia").innerHTML = prezzo*narnia + " €";
        document.getElementById("maze").innerHTML = prezzo*maze + " €";
        document.getElementById("blade").innerHTML = prezzo*blade + " €";



    }
    
    
    }
}


