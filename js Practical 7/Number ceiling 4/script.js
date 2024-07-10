        function ceilingNumber() {
            let userNumber = parseFloat(prompt("Please enter a number:"));
            if (isNaN(userNumber)) {
                alert("Invalid input. Please enter a valid number.");
            } else {
                let ceilingNumber = Math.ceil(userNumber);
                alert("The ceiling of the number is: " + ceilingNumber);
            }
        }
    