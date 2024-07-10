function replaceSubstring() {
    let userString = prompt("Please enter a string:");
    let searchString = prompt("Please enter the substring to search for:");
    let replacementString = prompt("Please enter the replacement substring:");
    let modifiedString = userString.replace(new RegExp(searchString, 'g'), replacementString);
    alert("The modified string is: " + modifiedString);
}
