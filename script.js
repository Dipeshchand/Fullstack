// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("auth-form");
    const formTitle = document.getElementById("form-title");
    const toggleMessage = document.getElementById("toggle-message");
    const toggleFormLink = document.getElementById("toggle-form");
    const signupFields = document.getElementById("signup-fields");
    const submitBtn = document.getElementById("submit-btn");

    let isLogin = false;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem(email));
            if (storedUser && storedUser.password === password) {
                alert(`Welcome back, ${storedUser.name}!`);
            } else {
                alert("Invalid email or password. Please try again.");
            }
        } else {
            const name = document.getElementById("name").value;
            if (localStorage.getItem(email)) {
                alert("This email is already registered. Please log in.");
            } else {
                const userData = { name, email, password };
                localStorage.setItem(email, JSON.stringify(userData));
                alert("Sign-up successful! You can now log in.");
                toggleForm();
            }
        }

        form.reset();
    });

    toggleFormLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleForm();
    });

    function toggleForm() {
        isLogin = !isLogin;
        if (isLogin) {
            formTitle.textContent = "Login";
            signupFields.style.display = "none";
            submitBtn.textContent = "Login";
            toggleMessage.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-form">Sign up here</a>';
        } else {
            formTitle.textContent = "Sign Up";
            signupFields.style.display = "block";
            submitBtn.textContent = "Sign Up";
            toggleMessage.innerHTML = 'Already have an account? <a href="#" id="toggle-form">Login here</a>';
        }
    }
});
