// Get DOM elements
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

// Function with parameter
function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
        elMsg.style.color = 'red';
    } else {
        elMsg.textContent = '';
    }
}
// Attach event listener using an anonymous function
elUsername.addEventListener('blur', function () {
    checkUsername(5);   // passing parameter
}, false);
