

function computerChoice(){
    console.log("Computer choosing");
    let x;
    if(compInt >2){
        x = "scissor";
        return x;
    }else if(compInt>1){
        x="paper";
        return x;
    }else{
        x ="rock";
        return x;
    }
    
}
var pcwin;
var compChoice;
var userChoice;
var compInt
while(true){
compInt = Math.random()*3;
compChoice = computerChoice();
userChoice = prompt("Rock, Paper, or Scissor?");
userchoice = userChoice.toLowerCase;



if(userChoice===compChoice){
    console.log("Draw");
    alert("Draw");
    pcwin=3;
}

if(userChoice==="rock" && compChoice==="paper"){
    pcwin=1;
}
if(userChoice==="paper" && compChoice==="scissor"){
    pcwin=1;
}
if(userChoice==="scissor" && compChoice==="rock"){
    pcwin=1;
}

if(userChoice==="rock" && compChoice==="scissor"){
    pcwin=2;
}
if(userChoice==="paper" && compChoice==="rock"){
    pcwin=2;
}
if(userChoice==="scissor" && compChoice==="paper"){
    pcwin=2;
}

if(pcwin==1){
    console.log("PC chose "+compChoice+" and beat user's "+userChoice);
    alert("PC chose "+compChoice+" and beat user's "+userChoice)
}else if(pcwin==2){
    console.log("PC chose "+compChoice+" and lost to user's "+userChoice);
    alert("PC chose "+compChoice+" and lost to user's "+userChoice)

}
}