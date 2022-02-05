document.addEventListener('DOMContentLoaded',function(){
    var text = document.getElementById('frase').textContent;

    let search = window.prompt("Informe o que quer procurar no texto");
    let substitute = window.prompt("Agora informe pelo que quer substituir");

    console.log(text.length);

    for(let i = 0; i < text.length; i++){
        text = text.replace(search, substitute);
    }

    console.log(text);

    window.alert("Por favor confira o console");

});