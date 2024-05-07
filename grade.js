function calculate(){
    var a=parsedInt(document.getElementById('bookOne').value);
    var b=parsendInt(document.getElementById('bookTwo').value);
    var c=parsedInt(document.getElementById('bookThree').value);
    var d=parsedInt(document.getElementById('bookFour').value);
     if (a>80 || b>80 || c>80 || d>80) {
         alert("Please enter correct value");
     }
     else {
         var obtain=a+b+c+d;
         document.getElementById("obtain").innerHTML=obtain;
         var per=obtain/800*100;
         document.getElementById("per").innerHTML=per;
         if (a>20 && b>20 && c>20 && d>20) {
             document.getElementById("remarks").innerHTML="<span style='color:#292'>Passed</span>";
         }
         else {
            document.getElementById("remarks").innerHTML="<span style='color:red'>Passed</span>";
         }
         if (per>=70) {
             document.getElementById("grade").textContent="A";
         }
         else if (per>=60) {
             document.getElementById("grade").textContent="B";
         }
         else if (per>=50) {
             document.getElementById("grade").textContent="C";
         }
         else if (per>=40) {
             document.getElementById("grade").textContent="D";
         }
         else {
             document.getElementById("grade").textContent="F";
         }
     }
  
 }
 