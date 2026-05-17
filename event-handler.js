// 1. Write the named function that will be called when the event fires
function checkUsername() {

    // Get feedback element
    var elMsg = document.getElementById('feedback');

    // Check username length using 'this'
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
        elMsg.style.color = 'red';
    } else {
        elMsg.textContent = '';
    }
}

// 2. Store the DOM element node in a variable
var elUsername = document.getElementById('username');

// 3. Attach the event handler to the element
elUsername.onblur = checkUsername;
