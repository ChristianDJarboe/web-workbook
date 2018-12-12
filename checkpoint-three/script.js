'use strict'
console.log("script Connected");

//audio sources
var alert1= new Audio('alerts/bitConnect.mp3');
var alert2= new Audio("alerts/heyheyhey.mp3");
var alert3= new Audio("alerts/hmmno.mp3");
var alert4= new Audio('alerts/wasup.mp3');
var alert5= new Audio("alerts/woah.mp3");
var alert6= new Audio("alerts/wow.mp3");
var alert7= new Audio("alerts/theWorld.mp3");
var click = new Audio('alerts/click.mp3');

var score=100;
var scoreElement = document.querySelector("#score");
var img = document.querySelector("#image");
var incrementValue=1;
var clickIncrementValue =1;
var increment=0;
//Increment amount
var ACI=1;
var MRI=5;
var FHI=10;
var SRI=20;
var BFI=40;
var BFAI=75;
var QMI=100;
//Increment element(s) count
var ACC=0;
var MRC=0;
var FHC=0;
var SRC=0;
var BFC=0;
var BFAC=0;
var QMC=0;
//Increment element(s) cost
var ACX=100;
var MRX=500;
var FHX=1000;
var SRX=2000;
var BFX=4000;
var BFAX=7500;
var QMX=10000;

function rotateImg(){
    
}

function elementClick(id){
    console.log(score);
    let element = document.getElementById(id);
    if(id==='autoClicker' && score>=ACX){
        ACC+=1; //increase count
        score-=Math.ceil(ACX);     //decrease score
        ACX+=Math.ceil(ACX/2);   //increase cost
        ACI+=1;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+ACC;
        element.children[2].innerHTML='Price: '+ACX;
        alert2.play();
    }
    if(id==='miningRig' && score>=MRX){
        MRC+=1; //increase count
        score-=Math.ceil(MRX);     //decrease score
        MRX+=Math.ceil(MRX/2);   //increase cost
        MRI+=5;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+MRC;
        element.children[2].innerHTML='Price: '+MRX;
        alert3.play();
    }
    if(id==='friendHelper' && score>=FHX){
        FHC+=1; //increase count
        score-=Math.ceil(FHX);     //decrease score
        FHX+=Math.ceil(FHX/2);   //increase cost
        FHI+=10;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+FHC;
        element.children[2].innerHTML='Price: '+FHX;
        alert4.play();
    }
    if(id==='serverRack' && score>=SRX){
        SRC+=1; //increase count
        score-=Math.ceil(SRX);     //decrease score
        SRX+=Math.ceil(SRX/2);   //increase cost
        SRI+=20;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+SRC;
        element.children[2].innerHTML='Price: '+SRX;
        alert5.play();
    }
    if(id==='bitFarm' && score>=BFX){
        BFC+=1; //increase count
        score-=Math.ceil(BFX);     //decrease score
        BFX+=Math.ceil(BFX/2);   //increase cost
        BFI+=40;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+BFC;
        element.children[2].innerHTML='Price: '+BFX;
        alert6.play();
    }
    if(id==='bitFactory' && score>=BFAX){
        BFAC+=1; //increase count
        score-=Math.ceil(BFAX);     //decrease score
        BFAX+=Math.ceil(BFAX/2);   //increase cost
        BFAI+=75;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+BFAC;
        element.children[2].innerHTML='Price: '+BFAX;
        alert7.play();
    }
    if(id==='quantumPC' && score>=QMX){
        QMC+=1; //increase count
        score-=Math.ceil(QMX);     //decrease score
        QMX+=Math.ceil(QMX/2);   //increase cost
        QMI+=100;     //increase the increment amount
        //update dom
        element.children[1].innerHTML='Count: '+QMC;
        element.children[2].innerHTML='Price: '+QMX;
        alert1.play();
    }
    if(id==='clickArea'){
        score+=1;
        click.play();
    }
}
window.setInterval(function(){
    increment+=1;
    if(ACC>=1){score+=ACI;}
    if(MRC>=1){score+=MRI;}
    if(FHC>=1){score+=FHI;}
    if(SRC>=1){score+=SRI;}
    if(BFC>=1){score+=BFI;}
    if(BFAC>=1){score+=BFAI;}
    if(QMC>=1){score+=QMI;}
    scoreElement.innerHTML="Score: "+score;

    //Resets the increment value in hopes of normalizing score increases
    if(increment>=1000){
        increment=0;
        console.log("Reseting increment");
    }

},100)


