document.addEventListener('DOMContentLoaded',function(){
    let text = window.prompt("Informe um texto separado somente por espaços");
    let textSplitted = text.split(" ");
    let myArray = [];

    for(var j = 0; j < textSplitted.length; j++){
        let countWords = 0;
        for (let i = 0; i < textSplitted.length; i++){
            if(textSplitted[j]==textSplitted[i])
                countWords++;
        }   

        let newWord = textSplitted[j]
        if (myArray.indexOf(newWord) == -1){
            myArray.push(newWord);
            myArray.push(countWords);  
        }
    }

    window.alert("Confira o console por favor");

    let biggestWord = myArray[0];
    let biggestWordTimes = myArray[1];
    for(let i = 1; i < myArray.length; i+=2){
        if (myArray[i] > biggestWordTimes){
            biggestWordTimes = myArray[i];
            biggestWord = myArray[i-1];
        }
    }

    console.log("A maior palavra encontrada foi: " + biggestWord + "\nSua ocorrência foi de: " + biggestWordTimes + " vezes");
});