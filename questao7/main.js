const send = document.querySelector(".send");

send.addEventListener("click", function(e){
    e.preventDefault();
    var date = new Date();
    
    let birth = document.querySelector(".birthday").value;
    console.log(birth);
    const birthString = birth.split("-")

    let anoNascimento = birthString[0];
    let mesNascimento = parseInt(birthString[1]);
    let diaNascimento = birthString[2];

    switch(mesNascimento){
        case 1:
            mesNascimento = 'Janeiro';
            break;
        case 2:
            mesNascimento = 'Fevereiro';
            break;
        case 3:
            mesNascimento = 'Março';
            break;
        case 4:
            mesNascimento = 'Abril';
            break;
        case 5:
            mesNascimento = 'Maio';
            break;
        case 6:
            mesNascimento = 'Junho';
            break;
        case 7:
            mesNascimento = 'Julho';
            break;
        case 8:
            mesNascimento = 'Agosto';
            break;
        case 9:
            mesNascimento = 'Setembro';
            break;
        case 10:
            mesNascimento = 'Outubro';
            break;
        case 11:
            mesNascimento = 'Novembro';
            break;
        case 12:
            mesNascimento = 'Dezembro';
            break;
    }

    console.log(diaNascimento + " de " + mesNascimento + " de " + anoNascimento);

    window.alert("Confira o console por favor!")
})