document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    if (nameValue === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        return;
    }

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        document.getElementById('emailError').textContent = 'email address is not valid';
        return;
    }
});