document.getElementById('registerBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const form = document.getElementById('registerForm');
    const message = document.getElementById('registerMessage');
    // Check if passwords match
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm_password').value;
    if (!form.checkValidity()) {
        message.style.color = 'red';
        message.textContent = 'Please fill all required fields correctly.';
        return;
    }
    if (password !== confirm) {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match.';
        return;
    }
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    form.reset();
});