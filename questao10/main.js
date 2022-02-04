const btn = document.querySelector(".send");
btn.addEventListener("click", function(e){
    e.preventDefault();

    let text = document.querySelector(".frase").value;

    let letras = 'TtEeNnIiSsPpOoLlAaRr';

    textSplitted = text.split("");

    for(let i = 0; i < text.length; i++){
        if(letras.indexOf(text[i]) != -1){
            switch (text[i]){
                case 't':
                    textSplitted[i] = 'p';
                    break;
                case 'T':
                    textSplitted[i] = 'P';
                    break;
                case 'e':
                    textSplitted[i] = 'o';
                    break;
                case 'E':
                    textSplitted[i] = 'O';
                    break;
                case 'n':
                    textSplitted[i] = 'l';
                    break;
                case 'N':
                    textSplitted[i] = 'L';
                    break;
                case 'i':
                    textSplitted[i] = 'a';
                    break;
                case 'I':
                    textSplitted[i] = 'A';
                    break;
                case 's':
                    textSplitted[i] = 'r';
                    break;
                case 'S':
                    textSplitted[i] = 'R';
                    break;
                case 'p':
                    textSplitted[i] = 't';
                    break;
                case 'P':
                    textSplitted[i] = 'T';
                    break;
                case 'o':
                    textSplitted[i] = 'e';
                    break;
                case 'O':
                    textSplitted[i] = 'E';
                    break;
                case 'l':
                    textSplitted[i] = 'n';
                    break;
                case 'L':
                    textSplitted[i] = 'N';
                    break;
                case 'a':
                    textSplitted[i] = 'i';
                    break;
                case 'A':
                    textSplitted[i] = 'I';
                    break;
                case 'r':
                    textSplitted[i] = 's';
                    break;
                case 'R':
                    textSplitted[i] = 'S';
                    break;
            }
        }
    }
    
    text = textSplitted.join("");
    console.log(text);

    window.alert("Por favor, verifique o console!")
});



    