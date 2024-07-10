        function roundNumber() {
            let userNumber = parseFloat(prompt("Please enter a number:"));
            if (isNaN(userNumber)) {
                alert("Invalid input. Please enter a valid number.");
            } else {
                let roundedNumber = Math.round(userNumber);
                alert("The rounded number is: " + roundedNumber);
            }
        }
    