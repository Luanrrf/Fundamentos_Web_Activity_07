document.addEventListener('DOMContentLoaded',function(){
    let frase = window.prompt("Informe uma frase");

    frase = frase.split("");
    boldVowels(frase);
    frase = frase.join("");

    document.getElementById("answer").innerHTML = `Seu texto com as vogais em negrito fica: ${frase}`;

    function boldVowels(frase){
        let vowels = 'aAeEiIoOuU';
        for(let i = 0; i < frase.length; i++){
            if(vowels.indexOf(frase[i]) != -1)
                frase[i] = frase[i].bold();
        }
    }    
});

