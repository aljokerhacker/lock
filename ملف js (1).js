function checkPassword() {
    var password = document.getElementById('password').value;

    // Replace 'yourpassword' with the actual password
    if (password === '12345678') {
        alert('Screen unlocked!');
        // Add further actions here after successful unlock
    } else {
        alert('Incorrect password. Please try again.');
    }
}
