const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reversedValue = reverseString(value);

    if (value === "") {
        alert("Please enter a value.");
        return;
    }
    else if (value === reversedValue) {
        alert("P A L I N D R O M E");
    }
    else {
        alert("Not today!");
    }
    input.value = ""; // Clear the input field
}