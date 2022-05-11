// var beginnumber= +document.getElementById('shownumber').value;
var beginnumber=0;
var hidenumber=0;
var ans=0;
function action(){
    beginnumber*=0;
    document.getElementById('shownumber').innerHTML=beginnumber   ;
    document.getElementById('shownumber').style.display="block";
    if (hidenumber!=0) {
       ans = hidenumber*1;
       hidenumber=0
       document.getElementById('hidenumber').style.display="none";
    } 
}
function inputnumber1(){
   var num1= parseInt(document.getElementById('number1').value);
   document.getElementById('shownumber').innerHTML+=num1;
   +(beginnumber+="1");
}
function inputnumber2(){
   var num2= document.getElementById('number2').value;
   document.getElementById('shownumber').innerHTML+=num2;
   +(beginnumber+="2");
}
function inputnumber3(){
   var num3= document.getElementById('number3').value;
   document.getElementById('shownumber').innerHTML+=num3;
   +(beginnumber+="3");
}
function inputnumber4(){
   var num4= document.getElementById('number4').value;
   document.getElementById('shownumber').innerHTML+=num4;
   +(beginnumber+="4");
}
function inputnumber5(){
   var num5= document.getElementById('number5').value;
   document.getElementById('shownumber').innerHTML+=num5;
   +(beginnumber+="5");
}
function inputnumber6(){
   var num6= document.getElementById('number6').value;
   document.getElementById('shownumber').innerHTML+=num6;
   +(beginnumber+="6");
}
function inputnumber7(){
   var num7= document.getElementById('number7').value;
   document.getElementById('shownumber').innerHTML+=num7;
   +(beginnumber+="7");
}
function inputnumber8(){
   var num8= document.getElementById('number8').value;
   document.getElementById('shownumber').innerHTML+=num8;
   +(beginnumber+="8");
}
function inputnumber9(){
   var num9= document.getElementById('number9').value;
   document.getElementById('shownumber').innerHTML+=num9;
   +(beginnumber+="9");
}
function inputnumber(){
   var num0= +document.getElementById('number0').value;
   document.getElementById('shownumber').innerHTML+=num0;
   +(beginnumber+="0");
}
function inputnumberx(){
    var num=document.getElementById('number').value;
    document.getElementById('shownumber').innerHTML+=num;
    +(beginnumber=num);
}
// function sum(){
//    if (hidenumber == 0) {
//         +(hidenumber = beginnumber*1);
//          beginnumber = 0 ;
//          document.getElementById('shownumber').innerHTML=beginnumber;
//          document.getElementById('hidenumber').innerHTML=hidenumber;
//          document.getElementById('hidenumber').style.display="block";
//    } else {
//       +(hidenumber+=beginnumber*1);
//       beginnumber = 0 ;
//       document.getElementById('shownumber').innerHTML=beginnumber;
//       document.getElementById('hidenumber').innerHTML=hidenumber;
//    }   
// }
// function subtr(){
//    if (hidenumber == 0) {
//         +(hidenumber = beginnumber*1);
//          beginnumber = 0 ;
//          document.getElementById('shownumber').innerHTML=beginnumber;
//          document.getElementById('hidenumber').innerHTML=hidenumber;
//          document.getElementById('hidenumber').style.display="block";
//    } else {
//       +(hidenumber-=beginnumber*1);
//       beginnumber = 0 ;
//       document.getElementById('shownumber').innerHTML=beginnumber;
//       document.getElementById('hidenumber').innerHTML=hidenumber;
//    }   
// }
// function multi(){
//    if (hidenumber == 0) {
//         +(hidenumber = beginnumber*1);
//          beginnumber = 0 ;
//          document.getElementById('shownumber').innerHTML=beginnumber;
//          document.getElementById('hidenumber').innerHTML=hidenumber;
//          document.getElementById('hidenumber').style.display="block";
//    } else {
//       +(hidenumber*=beginnumber*1);
//       beginnumber = 0 ;
//       document.getElementById('shownumber').innerHTML=beginnumber;
//       document.getElementById('hidenumber').innerHTML=hidenumber;
//    }   
// }
// function devided(){
//    if (hidenumber == 0) {
//         +(hidenumber = beginnumber*1);
//          beginnumber = 0 ;
//          document.getElementById('shownumber').innerHTML=beginnumber;
//          document.getElementById('hidenumber').innerHTML=hidenumber;
//          document.getElementById('hidenumber').style.display="block";
//    } else {
//       +(hidenumber*=beginnumber*1);
//       beginnumber = 0 ;
//       document.getElementById('shownumber').innerHTML=beginnumber;
//       document.getElementById('hidenumber').innerHTML=hidenumber;
//    }   
// }
// function endmath(){
//    document.getElementById("shownumber").innerHTML= hidenumber;
//    document.getElementById("hidenumber").style.display="none";
// }






