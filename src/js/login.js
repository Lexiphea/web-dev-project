function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabs = document.querySelectorAll('.tab');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.target;
    const password = form.querySelector('input[type="password"]').value;
    const confirmPassword = form.querySelector('input[placeholder="Confirm Password"]')?.value;

    if (form.id === 'signupForm') {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return; // Exit the function if passwords don't match
        }
        alert('Signup successful!');
    } else if (form.id === 'loginForm') {
        alert('Login successful!');
    }
}