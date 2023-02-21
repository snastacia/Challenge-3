# 03 JavaScript: Password Generator

# User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## Description

Created an application that generates a random password based on completed prompts, such as password length, whether to include uppercase, lowercase, numeric, and/or special characters. See the usage section below for exampls how the application works. 


## Installation

No installation required. 

## Usage

When I click on the "generate a password button", then I will be prompted to enter a password length: ![password length prompt](file:///Users/nastacias/Desktop/bootcamp/Challenge-3/Assets/length%20.png)
Once I input my password length, I'll be asked to confirm if I want to include lowercase characters in my password: ![lowercase characters](file:///Users/nastacias/Desktop/bootcamp/Challenge-3/Assets/lowercase%20characters.png)
Following that, I'll be asked to confirm if I want to include uppercase characters in my password: ![uppercase characters](file:///Users/nastacias/Desktop/bootcamp/Challenge-3/Assets/uppercase%20characters.png)
Then, I'll be asked to confirm if I want to include numeric characters in my password: ![numeric characters](file:///Users/nastacias/Desktop/bootcamp/Challenge-3/Assets/numeric%20characters.png)
Finally, I'll be asked to confirm if I want to include special characters in my password: ![special characters](file:///Users/nastacias/Desktop/bootcamp/Challenge-3/Assets/special%20characters.png)
Once prompts have been confirmed, a password will be generated: ![generated password](file:///Users/nastacias/Desktop/bootcamp/Challenge-3/Assets/password.png)

## Credits

N/A

## License

MIT License.
