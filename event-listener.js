// 1. Get the username input element
var elUsername = document.getElementById('username');

// 2. Get the feedback message element
var elMsg = document.getElementById('feedback');

// 3. Define the function to check username length
function checkUsername() {
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
        elMsg.style.color = 'red';
    } else {
        elMsg.textContent = '';
    }
}

// 4. Attach the event listener
elUsername.addEventListener('blur', checkUsername, false);
