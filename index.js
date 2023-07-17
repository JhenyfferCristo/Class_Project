function calculateArea() {
   var length = parseFloat(document.getElementById("length").value);
   var width = parseFloat(document.getElementById("width").value);
 
   if (isNaN(length) || isNaN(width)) {
     document.getElementById("result").innerHTML = "Invalid input. Please enter numeric values.";
     return;
   }
 
   var area = length * width;
   document.getElementById("result").innerHTML = "The area is: " + area;
 }