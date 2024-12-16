// Quantity selector functionality
const quantity = document.getElementById('quantity');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

decrease.addEventListener('click', () => {
    const currentValue = parseInt(quantity.value);
    if (currentValue > 1) {
        quantity.value = currentValue - 1;
    }
});

increase.addEventListener('click', () => {
    const currentValue = parseInt(quantity.value);
    if (currentValue < 10) {
        quantity.value = currentValue + 1;
    }
});

// Prevent manual input of invalid quantities
quantity.addEventListener('change', () => {
    const value = parseInt(quantity.value);
    if (value < 1) quantity.value = 1;
    if (value > 10) quantity.value = 10;
});

// Add to cart functionality
const addToCart = document.getElementById('add-to-cart');
addToCart.addEventListener('click', () => {
    const amount = quantity.value;
    alert(`Added ${amount} item(s) to cart`);
});

// Wishlist functionality
const wishlist = document.getElementById('wishlist');
let isInWishlist = false;

wishlist.addEventListener('click', () => {
    isInWishlist = !isInWishlist;
    wishlist.querySelector('span').textContent = isInWishlist ? '♥' : '♡';
});