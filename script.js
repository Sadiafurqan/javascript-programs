var input = prompt("Enter a character:");

if (input >= '0' && input <= '9') {
    alert("The input is a number.");
} else if (input >= 'A' && input <= 'Z') {
    alert("The input is an uppercase letter.");
} else if (input >= 'a' && input <= 'z') {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is neither a number nor a letter.");
}
