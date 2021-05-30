function anno() {
    var age =2021 -  document.getElementById("anno").value  ;
    var km = prompt("Quanti km vuoi fare?");
    var kmBlade = 800;
    var kmMaze = 600;
    var kmNarnia = 1000;


    var prezzo = km * 0.21;
    var prezzoMaze = kmMaze * 0.21;
    var prezzoBlade = kmBlade * 0.21;
    var prezzoNarnia = kmNarnia * 0.21;


    var saleMin = prezzo - prezzo/100*20;
    var saleMinBlade = prezzoBlade - prezzoBlade/100*20;
    var saleMinNarnia = prezzoNarnia - prezzoNarnia/100*20;
    var saleMinMaze = prezzoMaze - prezzoMaze/100*20;

    var saleMax = prezzo - prezzo/100*40;
    var saleMaxBlade = prezzoBlade - prezzoBlade/100*40;
    var saleMaxNarnia = prezzoNarnia - prezzoNarnia/100*40;
    var saleMaxMaze = prezzoMaze - prezzoMaze/100*40;








    if (age < 18){
        document.getElementById("costo").innerHTML = saleMin + " €";
        document.getElementById("narnia").innerHTML = saleMinNarnia + " €";
        document.getElementById("maze").innerHTML = saleMinMaze + " €";
        document.getElementById("blade").innerHTML = saleMinBlade + " €";



    }
    else{ if( age >= 65 ){
        document.getElementById("costo").innerHTML = saleMax + " €";
        document.getElementById("narnia").innerHTML = saleMaxNarnia + " €";
        document.getElementById("maze").innerHTML = saleMaxMaze + " €";
        document.getElementById("blade").innerHTML = saleMaxBlade + " €";



    }else
    {
        document.getElementById("costo").innerHTML = prezzo + " €";
        document.getElementById("narnia").innerHTML = prezzoNarnia + " €";
        document.getElementById("maze").innerHTML = prezzoMaze + " €";
        document.getElementById("blade").innerHTML = prezzoBlade + " €";



    }
    
    
    }
}


