const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const navLinks = document.getElementById("nav-links");
const navCart = document.getElementById("nav-cart");
const profileIcon = document.getElementById("profile-icon");
const searchBar = document.getElementById("search-bar");
const cartCount = document.querySelector(".cart-count");
let cartItems = 0;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navCart.addEventListener("click", () => {
  alert("Cart is empty!"); // Implement cart functionality here
});

profileIcon.addEventListener("click", () => {
  alert("Profile Clicked!"); // Implement profile functionality here
});

searchBar.addEventListener("input", (e) => {
  console.log("Searching for:", e.target.value); // Implement search functionality here
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".product__category", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".contact-info__section", {
  ...scrollRevealOption,
  origin: "right",
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

// Add to Cart Functionality
document.querySelectorAll(".cart-btn").forEach(button => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".product__card");
    const quantityDisplay = card.querySelector(".cart-quantity");
    let quantity = parseInt(quantityDisplay.textContent) || 0;
    quantity++;
    quantityDisplay.textContent = quantity;
    cartItems++;
    cartCount.textContent = cartItems;
  });
});

document.querySelectorAll(".cart-decrease").forEach(button => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".product__card");
    const quantityDisplay = card.querySelector(".cart-quantity");
    let quantity = parseInt(quantityDisplay.textContent) || 0;
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
      cartItems--;
      cartCount.textContent = cartItems;
    }
  });
});

document.querySelectorAll(".cart-increase").forEach(button => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".product__card");
    const quantityDisplay = card.querySelector(".cart-quantity");
    let quantity = parseInt(quantityDisplay.textContent) || 0;
    quantity++;
    quantityDisplay.textContent = quantity;
    cartItems++;
    cartCount.textContent = cartItems;
  });
});
