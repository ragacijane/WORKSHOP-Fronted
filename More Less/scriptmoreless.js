

let listOfWords = [];

let n = 0;

function initialize(){
    
    var tbox = document.getElementById("tbox");
    
    var more_less = document.getElementById("more_less");

    let bodystyle = document.getElementById("body");

    bodystyle.style.width = "80%";
    bodystyle.style.margin = "auto";

    listOfWords = tbox.innerText;

    listOfWords = listOfWords.split(" ")

    let sumChar = 0;

    listOfWords.forEach(element => {
        sumChar += element.length + 1;
    });

    if( sumChar <= 201 ){ //201 jer racunam rec+razmak
        more_less.style.display = 'none';
    }
    else{
        sumChar = 0;
        while( sumChar <= 200 ){
            
            sumChar += listOfWords[n].length + 1;
            n++;
        }
    }

}


let isLess = false;

function writeTxt(){

    if( !isLess ){
        
        tbox.innerHTML = "";

        for( let i = 0 ; i < n ; i++ ){
            
            tbox.append( listOfWords[i] + " " );
        }

        isLess = true;
        more_less.innerText = "More...";
    }

    else{
        tbox.innerHTML = "";

        for( let i = 0 ; i < listOfWords.length ; i++ ){

            tbox.append( listOfWords[i] + " " );
        }

        isLess = false;
        more_less.innerHTML = "Less...";
    }
}