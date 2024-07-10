        function findCharacter() {
            let userString = prompt("Please enter a string:");
            let index = parseInt(prompt("Please enter the index:"));
            if (index >= 0 && index < userString.length) {
                alert("The character at index " + index + " is: " + userString.charAt(index));
            } else {
                alert("Invalid index. Please enter a valid index between 0 and " + (userString.length - 1));
            }
        }
    