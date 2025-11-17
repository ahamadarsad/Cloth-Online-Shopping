function validateSignup(event) {
    event.preventDefault(); // stop form from refreshing the page ,❌ stop page reload

    let name = document.querySelector("input[placeholder='Full Name']").value;
    let email = document.querySelector("input[placeholder='Email Address']").value;
    let password = document.querySelector("input[placeholder='Password']").value;
    let confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("⚠️ Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return false;
    }

    alert("✅ Signup Successful! Welcome to StyleZo, " + name + " 🎉");
    return true;
}

