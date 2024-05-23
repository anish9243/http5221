//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========



function test__checkId(userInput, expected) {
    "use strict";
  
    let result = checkHumbrId(userInput);
    let msg;
    if (result === expected) {
       msg = "Value tested:" + userInput + " | Expected result: " + expected + "<span style = 'color:green'> ==PASSED==<br></span>";
    } else {
       msg = "Value tested:" + userInput + " | Expected result: " + expected + "<span style = 'color:red'> xxFAILEDxx<br></span>";
    }
    let msgBox = document.getElementById("data")
    msgBox.innerHTML += msg;
  }

test__checkId("n01667320", true); //valid with "n"
test__checkId("N01667320", true); //valid with "N"
test__checkId("x01667320", false); //not valid with "x"
//boundry check
test__checkId("n1234567", false); 
test__checkId("n12345678", true); 
test__checkId("n123456789", false); 

test__checkId(null, false); 
test__checkId(true, false); 

test__checkId("n00000000", true);
test__checkId("n99999999", false);

