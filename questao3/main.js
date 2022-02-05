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

    let tabela = document.querySelector(".table");  
    let tableRow;
    for(let i = 0; i < myArray.length; i++){
        if(i%2==false){
            tableRow = document.createElement("tr");
            tabela.appendChild(tableRow);   
        }
        let tableDoc = document.createElement("td");
        tableDoc.innerHTML = myArray[i];   
        tableRow.appendChild(tableDoc);     
    }    
});

