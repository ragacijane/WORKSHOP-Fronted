

let listOfWords = [];
let result;
let wordInput;

function initialize(){

    result = document.getElementById("result");

    listOfWords=document.getElementById("textbox").innerText;
    listOfWords=listOfWords.split(" ");

    let body=document.getElementById("body");
    body.style.width="90%";
    body.style.margin="auto";

}

function firstIndBtn(){

    wordInput = document.getElementById("word").value;

    if( wordInput !== ""){

        result.innerText = listOfWords.indexOf(wordInput);
    }
    else {
        result.innerText = "Please put the word first.";
    }

}

function lastIndBtn(){

    wordInput = document.getElementById("word").value;

    if( wordInput !== ""){

        result.innerText = listOfWords.lastIndexOf(wordInput);
    }
    else {
        result.innerText = "Please put the word first.";
    }

}

function prntAllInclude(){
    wordInput = document.getElementById("word").value;
    result.innerText = "";
    if( wordInput !== ""){
        listOfWords.forEach(element =>{
            if ( element.includes(wordInput)){
                result.append(element+" ");
            }
        });
    }
    else {
        result.innerText = "Please put the word first.";
    }
}

function between(){

    let ind1=parseInt(document.getElementById("index1").value);
    let ind2=parseInt(document.getElementById("index2").value);

    result.innerText = "";

    if( ind1 < ind2 ){
        let list=listOfWords.slice( ind1, ind2 );
        for(let i = 0; i < list.length ; i++){
            result.append(list[i] + " ");
        }
    }
    else {
        result.innerText = "Please put correct index.";
    }
}
function change(){
    wordInput = document.getElementById("word").value;
    let wordInput2 = document.getElementById("word2").value;

    result.innerText = "";

    if( wordInput !== "" && wordInput2 !== ""){
        let list=listOfWords;
        list.splice( listOfWords.indexOf(wordInput), 1, wordInput2);
        list.forEach(element =>{
            result.append(element+" ");
            });
    }
    else {
        result.innerText = "Please put the word first.";
    }
}

function deleteW(){
    wordInput = document.getElementById("word").value;
    result.innerText = "";

    if( wordInput !== "" ){
        let list=listOfWords;
        list.splice( listOfWords.indexOf(wordInput), 1);
        list.forEach(element =>{
            result.append(element+" ");
        });
    }
    else {
        result.innerText = "Please put the word first.";
    }
}