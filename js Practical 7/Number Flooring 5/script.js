        function floorNumber() {
            let userNumber = parseFloat(prompt("Please enter a number:"));
            if (isNaN(userNumber)) {
                alert("Invalid input. Please enter a valid number.");
            } else {
                let flooredNumber = Math.floor(userNumber);
                alert("The floored number is: " + flooredNumber);
            }
        }
    