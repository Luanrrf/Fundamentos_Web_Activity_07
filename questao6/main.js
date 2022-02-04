const send = document.querySelector(".send");
send.addEventListener("click", function(e){
    e.preventDefault();
    var date = new Date();
    
    let birth = document.querySelector(".birthday").value;
    console.log(birth);
    const birthString = birth.split("-")

    let anoNascimento = birthString[0];
    let mesNascimento = birthString[1];
    let diaNascimento = birthString[2];

    let anoAtual = date.getFullYear();
    let mesAtual = date.getMonth();
    let diaAtual = date.getDate();

    let anosTotais = anoAtual - anoNascimento;
    let mesesTotais = mesAtual - mesNascimento + 1;
    let diasTotais = diaAtual - diaNascimento;

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

    console.log("Você possui até hoje " + diasTotais + " dias de vida.");

    window.alert("Confira o console por favor!")
})