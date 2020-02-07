function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     
     (function(num) {
       button.onclick = function() {
          alert('This is button ' + num);
       }
     })(i);
     body.appendChild(button);
   }
}
 
createButtons();

//button 1 - output 1 
