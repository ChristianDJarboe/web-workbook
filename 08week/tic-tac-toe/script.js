'use strict';
var intturn = Math.random()*2;
var turn;
var turncount=0;
var reset = false;
var board =[null,null,null,
            null,null,null,
            null,null,null];

$(document).ready(function() {
//init varaiables
 

//Selects who goes first
  if(intturn>1){
    turn="player1";
  } else{turn="player2";}
  //Click function, changes ever turn.
  $('[data-cell]').on('click', function(){

      if(board[$(this).data().cell]=''){   //Fills the array board
          if(turn ==="player1"){
            board[$(this).data().cell]="X";
            turn="player2";
          }else{
            board[$(this).data().cell]="O";
            turn="player1";
        }
        //Prints board
        $(this).text(board[$(this).data().cell]);
        //Clears board
        if(reset ===true){
          for(let i=0;i<9;i++){
            $(this).text='a';

          }
        }
        turncount++;
        console.log(turncount);
      
      }

  })
//-----------------------------------------
  $('#clear').on("click", function(){
    console.log("ASSS");
    for(let i=0;i<9;i++){
      board[i]=null;
  
     
    }
    reset = true;
    turncount=0;
  
  })





});



 

