// === Responsive Navbar Toggle ===
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// === Add to Cart Popup ===
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Create popup message
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.textContent = "🛒 Item added to cart!";
    document.body.appendChild(popup);

    // Show popup briefly then remove
    setTimeout(() => {
      popup.remove();
    }, 2000);
  });
});
