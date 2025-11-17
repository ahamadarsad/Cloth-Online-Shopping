document.querySelector("button[type='submit']").addEventListener("click", (e) => {
    e.preventDefault(); //❌ stop page reload

    let username = document.querySelector("input[type='text']").value;
    let password = document.querySelector("input[type='password']").value;
    if (username === "" || password === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Login successful...");
    }
});

