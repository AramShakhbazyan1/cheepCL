document.getElementById('myForm').addEventListener('submit', function (event) {

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    if (!emailValue) {
        alert("Please enter an email address");
    }
});