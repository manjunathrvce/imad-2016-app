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

button=document.getElementById('counter');
button.onclick = function(){
    
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a varaiable
  request.onreadystatechange = function(){
      if(request.readystate===XMLHttpRequest.DONE){
          //Take some action
          if(request.status===200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Not Done Yet
  };
  
  //Make the Request
  request.open('GET','manjunathrvce.imad.hasura-app.io/counter');
  request.send(null);
};