// In a real-world scenario, you should use server-side code for authentication.
// This is a simple client-side authentication for demonstration purposes.
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace with your actual credentials.
    const correctUsername = "admin";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
        // Redirect to the admin panel or perform desired actions.
        alert("Login successful!");
        window.location.href = "admin-panel.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
