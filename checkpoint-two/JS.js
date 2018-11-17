'use strict'
//Variables
var height=document.body.scrollHeight;
var width=  window.innerWidth;   
var canvas = document.getElementById("fancyBox");   //Declares canvas
canvas.width = width-20;               //sets width
canvas.height = document.body.scrollHeight;                 //sets height
var ctx = canvas.getContext("2d");                  //get context
ctx.fillStyle = "#228df1";                             //set color
var dotCount =30;               //particle count
var dotArray = [];              //Where the particles will be stored

//End Variables

//------------------------------------------------------
class dot {
    constructor(xPos, yPos) {   //initializes dot position
        this.xPos = Math.random()*width;
        this.yPos = Math.random()*height;
        
        if(Math.random()*2>1){ //Direction
            this.velX =(Math.random()*3);  //speed
        }else{
            this.velX =(Math.random()*-3); //speed
        }
        if(Math.random()*2>1){  //Direction
            this.velY =Math.random()*3; //speed
        }else{  
            this.velY =Math.random()*-3;  //speed
        }
    }
    move(){   //updates position
        this.xPos+=this.velX/3; 
        this.yPos+=this.velY/3; 
        //Catches particles that go outside the right border
        if(this.xPos > width+100){
            this.xPos =-99;
        }
        //Catches particles that go outside the left border
        if(this.xPos <-100){
            this.xPos = width+100;
        }
        //catches particles that go outside the bottom border
        if(this.yPos > height){
            this.yPos =0;
        }
        //catches particles that go outside the top border
        if(this.yPos <0){
            this.yPos=height;
        }
       
        
    }
}
//-------------------------------------------------------------




/*Draws the dot the function is passed to the canvas */
function DrawDot(dot){
    var temp=dot
    temp.move();
    ctx.beginPath();
    ctx.arc(dot.xPos,dot.yPos,5,0,2*Math.PI);
    ctx.fill();
}

/*Compares the distance between dot i and all the other dot's in the array.
if the distance is less than the dotConnectDistance, it will draw a line 
between the two dots.*/
function getDistances(i){
    var dotConnectDistanceRange=[150 , -150];

    let compare=dotArray[i];
    for(var j =0;j<dotCount;j++){
        let temp = dotArray[j];
        if(compare.xPos - temp.xPos < dotConnectDistanceRange[0] && compare.xPos - temp.xPos > dotConnectDistanceRange[1]
        && compare.yPos - temp.yPos < dotConnectDistanceRange[0] && compare.yPos - temp.yPos > dotConnectDistanceRange[1]   ){
            ctx.moveTo(compare.xPos, compare.yPos);
            ctx.lineTo(temp.xPos, temp.yPos);
            ctx.strokeStyle ="#228df1";
            ctx.stroke();
            
        }
      
    }
   
}
function updateWidth(){
    width= window.innerWidth;
    canvas.width=width-20;
    ctx.fillStyle = "#228df1";     //update color?                  
   
    if(width<500){
        dotCount=5;
       
    }
    if(width<1000 && width>400){
        dotCount=20;
    }
    if(width>1000){
        dotCount=30;
    }
}
//-----------------------LOGIC ORDER------------------------------------------

//Creates all the particles, add's them to the dotArray, 
//only the constructor is called inside the dot class
var on =true;
if(on==true){

for(var i=0;i<dotCount;i++){    
    dotArray.push(new dot(10,10));
    }

/*First clears the canvas to prevent repeating particles
    Then calls the move function within each dot
    Calls DrawDot function
    Calls getDistances function */
window.setInterval(function(){
    updateWidth();
    ctx.clearRect(0,0,width,height);
    for(let i=0;i<dotCount;i++){
        dotArray[i].move();
        DrawDot(dotArray[i]);
    }
    for(var i=0;i<dotCount;i++){
        getDistances(i);
    }
    
  }, 10);
}