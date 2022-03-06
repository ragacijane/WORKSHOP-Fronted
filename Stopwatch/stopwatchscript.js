
let thetime;
let sec=0;
let min=0;
let hendler;

function initialize(){
    let body=document.getElementById("body");
    body.style.width="70%";
    body.style.margin="auto";
    thetime= document.getElementById("thetime");
    thetime.innerText="0"+min+" : "+"0"+sec;
}

function stopwatch(){
    if(sec === 59){
        sec=-1;
        min++;
    }
    sec++;
    if( sec < 10 && min < 10)
        thetime.innerText="0"+min+" : "+"0"+sec;
    else if(sec < 10 )
        thetime.innerText=min+" : "+"0"+sec;
    else if(min < 10 )
        thetime.innerText="0"+min+" : "+sec;
    else
        thetime.innerText=min+" : "+sec;
}

function  start(){
    hendler=setInterval(stopwatch, 1000);
}

function stop(){
    clearInterval(hendler);
}

function reset(){
    stop();
    min=0;
    sec=0;
    thetime.innerText="0"+min+" : "+"0"+sec;
}

