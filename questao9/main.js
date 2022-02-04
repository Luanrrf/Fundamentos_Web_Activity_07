const btn = document.querySelector(".send");
var senha;

btn.addEventListener("click", function(e){
    e.preventDefault();

    senha = document.querySelector(".senha").value;
    let senhaCor = document.querySelector(".senha");

    let funcMaiuscula = temMaiuscula(senha);
    let funcMinuscula = temMinuscula(senha);
    let funcNumero = temNumero(senha);
    let funcCaractEspecial = temCaractEspecial(senha);

    if(funcMaiuscula && funcMinuscula && funcNumero && funcCaractEspecial){
        senhaCor.classList.add("transformGreen");
        senhaCor.classList.remove("transformOrange");
        senhaCor.classList.remove("transformRed");
    }
        else{
            if(funcMaiuscula && funcMinuscula && funcNumero){
                senhaCor.classList.add("transformOrange");
                senhaCor.classList.remove("transformGreen");
                senhaCor.classList.remove("transformRed");
            }
            else{
                if(funcMaiuscula||funcMinuscula){
                    senhaCor.classList.add("transformRed");
                    senhaCor.classList.remove("transformOrange");
                    senhaCor.classList.remove("transformGreen");
                }
            }
        }
});

function temMaiuscula(senha){
    let maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
    for(let i = 0; i < senha.length; i++){
        if(maiusculas.indexOf(senha[i]) != -1)
            return true;
    }
    return false;
}

function temMinuscula(senha){
    let minusculas = 'abcdefghijklmnopqrstuvxwyz';
    for(let i = 0; i < senha.length; i++){
        if(minusculas.indexOf(senha[i]) != -1)
            return true;
    }
    return false;
}

function temNumero(senha){
    let numeros = '123456789';
    for(let i = 0; i < senha.length; i++){
        if(numeros.indexOf(senha[i]) != -1)
            return true;
    }
    return false;
}

function temCaractEspecial(senha){
    let caractEspeciais = '@#!$%&*,-+.=';
    for(let i = 0; i < senha.length; i++){
        if(caractEspeciais.indexOf(senha[i]) != -1)
            return true;
    }
    return false;
}