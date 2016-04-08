var number = prompt('Please enter your phone number in this format: xxx-xxx-xxxx');

if ((number.charAt(3) !== '-') || (number.charAt(7) !== '-')) {
    alert("That's not a valid input");
}

var birthday = prompt('Enter your birthday is this format: xx/xx/xxxx');

if ((birthday.charAt(2) !== '/') || (birthday.charAt(5) !== '/')) {
    alert("Double check your birthday format...")
}

var state = prompt("Enter your state abbreviation in all caps");
if ((state.charAt(0)) !== (state.charAt(0).toUpperCase()) || (state.charAt(1)) !== (state.charAt(1).toUpperCase())) {
    alert("Make sure your letters are capitalized");
}

var married = prompt('Are you married? (yes or no)');

if (married.toUpperCase() === 'YES') {
    alert("Tell your spouse hi from me.")
}
else if (married.toUpperCase() === 'NO') {
    alert("Living the single life!")
}
else {
    alert("Question too hard for you?")
}