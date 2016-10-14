/*console.log('Loaded!');
// changes the main text to new value
var element=document.getElementById('main-text');
    element.innerHTML='New Value';
var marginLeft = 0;

function moveRight(){
  marginLeft=marginLeft+4;
  image.style.marginLeft=marginLeft+'px';
}


var image=document.getElementById('madi');
    image.onclick=function(){
        var interval = setInterval(moveRight,10);
    };
    */
    
    
    
// counter coding

var counter = 0 ;
button=document.getElementById('counter');
button.onclick = function(){
    
  //make a request to the counter endpoint
  
  
  //capture the response and store it in a varaiable
  
  
  //render the variable in the correct span
  counter=counter+1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};