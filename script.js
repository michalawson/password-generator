/* 

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

Prompts for password criteria

    Prompt 1 (MANDATORY): Criteria 1: Length of pass
        8-128
            validate #1: something must be typed
            validate #2: condition is met (not less than 8, not more than 128)
            valdiate #3: must be numeric, if typing letters, do not move on, keep the prompt until correct answer is provided.
    Confirm 2: Criteria 2: Char type - Lower case
        AND/OR
    Confirm 3: Criteria 3: Char type -Upper case
        AND/OR
    Confirm 4: Criteria 4: Char type - numeric
        AND/OR
    Confirm 5: Criteria 5: Char type - Speical Char

    Valdiate that at least one criteria is selected, if none is selected, alert: "you must select at least one type, please try again" - go to confirm 2
    
    Final: A PASSWORD! YAY!





WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 
128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*/


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);