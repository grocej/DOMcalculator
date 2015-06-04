console.log("Welcome to the DOM");
$(document).ready(function() {

  //1) if button is clicked then
  //2) grab value from first input box, grab value from second input box
  //3) perform operation of click button,
  //4) set equal to variable and return to answer:

  //$(<element> .class || #id).click(function(){

  //})
$("#Add").click(function() {
 var addNum = $("#num_one").val();
 var addA = parseInt(addNum);
 var addNum2 = $("#num_two").val();
 var addB = parseInt(addNum2);
 var sumCalc = addA + addB;
 document.querySelector(".answer").innerHTML = "Math! " + sumCalc
})

$("#Subtract").click(function() {
 var subNum = $("#num_one").val();
 var subA = parseInt(subNum);
 var subNum2 = $("#num_two").val();
 var subB = parseInt(subNum2);
 var subCalc = subA - subB;
 document.querySelector(".answer").innerHTML = "Math! " + subCalc
})

$("#Multiply").click(function() {
 var multNum = $("#num_one").val();
 var multA = parseInt(multNum);
 var multNum2 = $("#num_two").val();
 var multB = parseInt(multNum2);
 var multCalc = multA * multB;
 document.querySelector(".answer").innerHTML = "Math! " + multCalc
})

$("#Divide").click(function() {
 var divNum = $("#num_one").val();
 var divA = parseInt(divNum);
 var divNum2 = $("#num_two").val();
 var divB = parseInt(divNum2);
 var divCalc = divA / divB;
 document.querySelector(".answer").innerHTML = "Math! " + divCalc
})

//$("#calculateBtn").click(function() {
  //document.querySelector(".answer").innerHTML =
//})
  // document.querySelector('#answer1').innerHTML = answer
  // anything i do in here is safe to interact with the document
  // when i say 'safe', i mean the dom exists at this point
  //
});
