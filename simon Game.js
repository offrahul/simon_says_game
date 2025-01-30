let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

let btns=["yellow","red","purple","green"];

let highScoreDisplay = document.createElement("p");
// highScoreDisplay.id = "high-score";
highScoreDisplay.innerText = "High Score: 0"; // Initial high score display
document.body.appendChild(highScoreDisplay); // Append the high score display to the body
let highScore=0;


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started =true;
    levelUp();
   }
});
function levelUp(){
userSeq=[]; 

    level++;
     h2.innerText=`level ${level}`;

     //random button
let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];

let randbtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randbtn);

gameSeq.push(randColor);
console.log(gameSeq);
     gameFlash(randbtn);

}
//game flash white
function gameFlash(btn){
    btn.classList.add("flash") ; 

    setTimeout(function(){
        btn.classList.remove("flash") ; 

    },200);
}

//when user press it flash green
function userFlash(btn){
    btn.classList.add("userflash") ; 

    setTimeout(function(){
        btn.classList.remove("userflash") ; 

    },200);
}


//we press
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
userColor=btn.getAttribute("id");
// console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);
}


//check level
function checkAns(idx){
    // console.log("curr level",level );

    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,700);
        }
    }else{
        h2.innerHTML=`game over! your score is <b>${level}</b> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
       

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
        reset();
    }
    if (level > highScore) {
        highScore = level;
        highScoreDisplay.innerText = `High Score: ${highScore}`; // Update display
    }
}


//access button to access
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}


