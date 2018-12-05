'use strict';
var intturn = Math.random()*2;
var turn;
var turncount=0;
var win = false;
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
   
      if(board[$(this).data().cell]===null){   //Fills the array board
          if(turn ==="player1"){
            board[$(this).data().cell]="X";
            turn="player2";
          }else{
            board[$(this).data().cell]="O";
            turn="player1";
        }
        turncount++;
        //Prints board
        /*This should print and be visible before the checkwin function
        is called but for some reason the final play is never displayed
        on the board. Very confusing. */
        $(this).text(board[$(this).data().cell]);
        checkWin(turn);
     
      }
    
  })
//-----------------------------------------
  $('#clear').on("click", function(){
    clear();
  })
  //Clears the board and resets turn count
  function clear(){
    console.log("Clearing");
    var cell = document.getElementsByClassName("cell");

    for(let i=0;i<9;i++){
      board[i]=null;
      cell[i].innerHTML="";
     
    }
    turncount=0;
  }


  function checkWin(turn){
    var x;
    if(turn === "player2"){x="X"}
    else{x="O"}
    //Checks for horizontal wins
    if(board[0]===x && board[1]===x && board[2]===x){
      console.log("Top row win");
      win=true;
    }
    if(board[3]===x && board[4]===x && board[5]===x){
      console.log("Middle row win");
      win=true;
    }
    if(board[6]===x && board[7]===x && board[8]===x){
      console.log("Bottom row win");
      win=true;
    }
    //Checks for vertical wins
    if(board[0]===x && board[3]===x && board[6]===x){
      console.log("Left column win");
      win=true;
    }
    if(board[1]===x && board[4]===x && board[7]===x){
      console.log("Middle column win");
      win=true;
    }
    if(board[2]===x && board[5]===x && board[8]===x){
      console.log("Right column win");
      win=true;
    }
    //Checks for diagonal wins
    if(board[0]===x && board[4]===x && board[8]===x){
      console.log("Backslash win");
      win=true;
    }
    if(board[2]===x && board[4]===x && board[6]===x){
      console.log("Forwardslash win");
      win=true;
    }
    if(win ===true){
      alert(x+" won!");
      clear();
      win = false;
    }

    if(turncount === 9 && win===false){
      alert("Tie Game!")
      clear();

    }
  }
});



 

