'use strict';

$(document).ready(function() {

  var intturn = Math.random()*2;
  var turn;
  var turncount=0;
  var board =[null,null,null,
              null,null,null,
              null,null,null];

  if(intturn>1){
    turn="player1";
  } else{turn="player2";}
  
  $('[data-cell]').on('click', function(){

      if($(this).text() ===''){
          if(turn ==="player1"){
            $(this).text("x");
            board[$(this).data().cell]="x";
            turn="player2";
          }else{
            $(this).text("x");
            board[$(this).data().cell]="x";
            turn="player1";
        }
        turncount++;
        checkWin();
        console.log(turncount);
        
      }

  })

  function checkWin(){
    for(let i=0;i<9;i++){ 
     
      }
    
        
  }
  


});
