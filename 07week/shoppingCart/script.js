var list = document.getElementsByTagName("li");
var count = list.length;
var msgContainer = document.createElement("h2");
msgContainer.innerHTML = "You have "+ count+" item(s) in your chopping cart";

var element =document.getElementById("x");
element.innerHTML =msgContainer.innerHTML;

//adds the remove button
for(var i=0;i<list.length;i++){
    list[i].innerHTML +="<input type='button' value ='Remove' onclick ='remove()'>"
}



function remove(){
    console.log("something");
}