 let gameseq=[];
 let userseq=[];

 let btns=["yellow","red","purple","green"];

let started = false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
      console.log("game is started");
      started=true;
      levelup();

    }

});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);


}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelup()
{

    level++; 
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor)
    console.log(gameseq);
    gameFlash(randbtn);
}


function checkAns(idx)
{
    // console.log("cur level: ",level);
   
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over:  Your Score was <b> ${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
        },150);
        reset();
    }

}


function btnPress()
{
    
    let btn=this;
    userFlash(btn);

    userColor =btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}