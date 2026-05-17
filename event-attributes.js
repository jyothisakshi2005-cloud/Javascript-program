function checkUsername() {
    // Get feedback element
    var elMsg = document.getElementById('feedback');

    // Get username input
    var elUsername = document.getElementById('username');

    // Check length of username
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
        elMsg.style.color = 'red';
    } else {
        elMsg.textContent = '';
    }
}
