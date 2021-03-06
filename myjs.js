// global functions
var isNumber = function(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); 
}

// phone number
var validatePhoneNumber = function() {
    var number = prompt('Please enter your phone number in this format: xxx-xxx-xxxx');
    
    var goodNumber = true;
    
    if (number.length !== 12) {
        goodNumber = false;
    }
    
    for (var i=0; i<number.length; i++) {
        if (i === 3 || i === 7) {
            if (number[i] !== '-') {
                goodNumber = false
            }
        }
        else {
            if ( !isNumber(number[i]) ) {
                goodNumber = false;
                console.log(i);
                console.log(number[i])
            }
        }
    }
    
    if (goodNumber) {
        alert("Thanks")
    }
    else {
        alert("Try again")
        validatePhoneNumber()
    }
}

// birthdate 
var validateBirthday = function() {
    var birthday = prompt('Enter your birthday in this format: \n mo/dy/yr')
    
    var goodBDay = true;
    
    if (birthday.length !== 8) {
        goodBDay = false;
    }
    
    for (var i =0; i<birthday.length; i++) {
        if (i === 2 || i === 5) {
            if (birthday[i] !== '/') {
                goodBDay = false;
            }
        }
    }
    
    var birthdayArray = birthday.split('/');

    if (birthdayArray[0] == 00 || birthdayArray[0] > 12 || birthdayArray[1] == 00 || birthdayArray[1] > 31) {
        goodBDay = false;
    }
    
    if (birthdayArray[0] == 02 && birthdayArray[1] > 29) {
        goodBDay = false;
    }
    
    if ((birthdayArray[0] == 4 || birthdayArray[0] == 6 || birthdayArray[0] == 9 || birthdayArray[0] == 11) && birthdayArray[1] > 30) {
        goodBDay = false;
    }

    if (goodBDay) {
        alert("that's a great day")
    }
    else {
        alert("you seem to be confused")
        validateBirthday();
    }
}

// postal code

var validatePostalCode = function() {
    var postalCode = prompt('Enter your postal code in either format: \n xxxxx or xxxxx-xxxx')
    
    var goodPost = true;
    
    if (postalCode.length !== 5 || postalCode.length !== 10) {
        goodPost = false;
    }
    
    for (var i=0; i<postalCode.length; i++) {
        if (postalCode[i] === 5 && postalCode[i] !== '-') {
            goodPost = false;
        }
        else {
            if (!isNumber(postalCode[i])) {
                goodPost = false;
            }
        }
    }
    
    alert(goodPost);
}


validatePhoneNumber();
validateBirthday();
