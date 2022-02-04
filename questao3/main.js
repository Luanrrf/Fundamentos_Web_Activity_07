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
    console.log(myArray);
    
});

