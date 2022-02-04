document.addEventListener('DOMContentLoaded',function(){
    var text = document.getElementById('frase').textContent;

    let search = window.prompt("Informe o que quer procurar no texto");
    let substitute = window.prompt("Agora informe pelo que quer substituir");

    var newText = text.replace(search, substitute);

    console.log(newText);

    window.alert("Por favor confira o console");

});