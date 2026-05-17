var form = document.getElementById('myForm');
var box = document.getElementById('box');
var button = document.getElementById('submitBtn');

/* -----------------------------    BUTTON CLICK HANDLER ------------------------------ */
button.addEventListener('click', function (event) {

    console.log('Event Type:', event.type);          // click
    console.log('Event Target:', event.target);      // button element
    console.log('Cancelable:', event.cancelable);    // true
    // Prevent default form submission
    event.preventDefault();

    // Stop bubbling to div and form
    event.stopPropagation();

    alert('Button clicked. Form not submitted.');
}, false);

/* -----------------------------
   DIV CLICK HANDLER
------------------------------ */
box.addEventListener('click', function () {
    console.log('Div clicked');
}, false);

/* -----------------------------
   FORM CLICK HANDLER
------------------------------ */
form.addEventListener('click', function () {
    console.log('Form clicked');
}, false);
