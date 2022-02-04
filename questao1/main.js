document.addEventListener('DOMContentLoaded',function(){
    let frase = window.prompt("Informe uma frase");
    let fraseInversa = '';

    frase = frase.split("");
    fraseInversa = frase.reverse().join("");

    window.alert(fraseInversa);
});