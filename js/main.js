var reaction1 = "I'm Right";
var reaction2 = "No, I'm Right";
var currentResponse = reaction1;

//for both functions, all we do is change the innerHTML within the headings in each container. The current Response toggles as each button is clicked 
function changeResponse1() {
	document.getElementById("heading1").innerHTML = currentResponse;
	if(currentResponse == reaction1) {
		currentResponse = reaction2;
	} else {
		currentResponse = reaction1;
	}
}

function changeResponse2() {
	document.getElementById("heading2").innerHTML = currentResponse;
	if(currentResponse == reaction1) {
		currentResponse = reaction2;
	} else {
		currentResponse = reaction1;
	}
}

//function used for getting the key pressed inside the form and putting that key into the heading
function myFunction(e){
    var keynum;


    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    //we take the keyCode and convert it into a string and appends it to our variable to be outputted
    var say = ("You Typed: " + String.fromCharCode(keynum));
    
    document.getElementById("change").innerHTML = say;
  }

//variables that hold input from the form in the HTML
var username;
var password;
var email;

function verify() {
	//retrieve values from our input boxes
	username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;

    //Check to see if values from the input boxes match our specifications
	if((password === "12345678") && (username.length <=14)) {
		document.getElementById("verifySay").innerHTML = "Congrats on knowing your username and password!";
	} else {
		document.getElementById("verifySay").innerHTML = "Incorrect username or password";
	}

}

