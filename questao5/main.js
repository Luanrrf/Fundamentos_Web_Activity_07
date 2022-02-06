const btn = document.querySelector(".send");
let text;

btn.addEventListener("click", function (e){
    e.preventDefault();

    text = document.querySelector("#frase").value;
    let search = document.querySelector(".search").value;
    let substitute = document.querySelector(".substitute").value;

    for(let i = 0; i < text.length; i++){
        text = text.replace(search, substitute);
    }

    console.log(text);

    const part1 = document.querySelector(".answer_part1");
    part1.classList.add("display-none");

    const part2 = document.querySelector(".text-replaced");
    part2.textContent = text;

    const btn2 = document.querySelector(".btn2");
    btn2.classList.remove("display-none");

});




