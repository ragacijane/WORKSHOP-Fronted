
function initialize(){
    let body=document.getElementById("body");
    body.style.width="80%";
    body.style.margin="auto";
    body.style.marginTop="100px";
}

//  FACTORIEL FUNCTIONS

function makeFact(x) {
    if (x === 1) {
        return 1;
    }
    else {
        return x * makeFact(x-1);
    }
}


function getfact(){
    let result = document.getElementById("result");
    let num = parseInt(document.getElementById("factTxt").value);
    num = Math.floor(num);
    if( num >= 1){

        if(num <= 20) {

            let fact = parseInt(makeFact(num));
            result.innerText=fact;
        }
        else {
            result.innerText="Please put positive integer greater than 1 and lower than 20."
        }
    }
    else{
        result.innerText="Please put positiv integer greater than 1."
    }
}

// FIOBANCCI FUNCTIONS

function getfib(){

    let resultTag = document.getElementById("resulttag");

    let fiboRes = document.getElementById("fiboresult");


    let fiboArray = [];
    fiboArray.push(0);
    fiboArray.push(1);

    let n=parseInt(document.getElementById("fibTxt").value);

    if(n >= 2){

        resultTag.innerText="First "+ n +" numbers are: ";

        for(let i = 2 ; i < n; i++ ){
            fiboArray.push( fiboArray[ i - 2 ] + fiboArray[ i - 1] );
        }
        fiboRes.innerText=fiboArray;


    }
    else {
        resultTag.innerText="Result is:";
        fiboRes.innerText="Please put positiv integer greater than 2.";
    }

}