'use strict'
//Variable Declarations And text initiation.
var list = document.getElementsByTagName("li");
var ul = document.getElementsByTagName('ul');
var count = list.length;
//Create h2
var msgContainer = document.createElement("h2");
msgContainer.innerHTML = "You have "+ count+" item(s) in your chopping cart";
//Create inputfield
var inputField = document.createElement("div");
inputField.innerHTML="<br> <input id='inputField' type = 'text'>";
//Create add button
var submit = document.createElement("div");
submit.innerHTML="<br> <input type = 'button' value ='Add Item' onclick = 'addItem()'>";
//Adds all elements to empty div
var element =document.getElementById("x");
element.innerHTML =msgContainer.innerHTML;
element.innerHTML += inputField.innerHTML;
element.innerHTML += submit.innerHTML;
//-----------End declarations and initiations.-----------------


//adds the remove button to each list element
for(var i=0;i<list.length;i++){
    list[i].innerHTML +="<input type='button' value ='Remove' onclick ='remove()' style ='position:absolute; left:500px;'>";
}



function remove(){
//Currently removes only the top index, I couldnt for the life of me figure out how to find
//the index of an element within a list on click
    console.log("Removeing item");
    var node = document.getElementsByTagName('ul');
    var position = node[0].index;
    node[0].children[0].remove();
    console.log(node[0].childNodes.length);
    count --;
    updateText();
}

function addItem(){
    var item = document.getElementById("inputField").value;
    if(item != ''){
        ul[0].innerHTML += "<li>"+item+"<input type='button' value ='Remove' onclick ='remove()' style ='position:absolute; left:500px;'></li>";
        console.log("Adding item "+ item);
        document.getElementById("inputField").value ="";
        count++;
        console.log(count);
        updateText();
    }
    
}

function updateText(){
    console.log("a");
    msgContainer.innerHTML = "You have "+ count+" item(s) in your chopping cart";
    inputField.innerHTML="<br> <input id='inputField' type = 'text'>";
    submit.innerHTML="<br> <input type = 'button' value ='Add Item' onclick = 'addItem()'>";
    element.innerHTML =msgContainer.innerHTML;
    element.innerHTML += inputField.innerHTML;
    element.innerHTML += submit.innerHTML;
}

//This code is literal spaghetti