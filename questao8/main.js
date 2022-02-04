const send = document.querySelector(".send");
send.addEventListener("click", function(e){
    e.preventDefault();
    var date = new Date();
    
    let day = document.querySelector(".day").value;
    console.log(day);
    const dayString = day.split("-")

    let ano1 = dayString[0];
    let mes1 = dayString[1];
    let dia1 = dayString[2];
    
    let day2 = document.querySelector(".day2").value;
    console.log(day2);
    const day2String = day2.split("-")

    let ano2 = day2String[0];
    let mes2 = day2String[1];
    let dia2 = day2String[2];


    let anosTotais = ano2 - ano1;
    let mesesTotais = mes2 - mes1;
    let diasTotais = dia2 - dia1;

    if (diasTotais < 0){
        diasTotais = diasTotais + 30;
        mesesTotais--;
    }

    if (mesesTotais < 0){
        mesesTotais = mesesTotais + 12;
        anosTotais--;
    }

    if (anosTotais > 0){
        mesesTotais = mesesTotais + (12 * anosTotais);
        anosTotais = 0;
    }

    if (mesesTotais > 0){
        diasTotais = parseInt(diasTotais + (365 * mesesTotais/12));
        mesesTotais = 0;
    }

    let semanas = parseInt(diasTotais / 7);

    console.log("Da 1º data até a segunda percebemos que existe(m) " + semanas + " semana(s) de distância.");

    window.alert("Confira o console por favor!");
})