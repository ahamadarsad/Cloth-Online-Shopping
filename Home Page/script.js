// === Responsive Navbar Toggle ===
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// === Add to Cart and Save to Local Storage ===
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const name = productCard.querySelector("h3").innerText;
    const price = productCard.querySelector(".price").innerText;
    const img = productCard.querySelector("img").src;

    // Create product object
    const product = { name, price, img };

    // Get current cart or empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add product to cart
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Popup confirmation
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.textContent = "✅ Item added to cart!";
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1500);
  });
});
