document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Item added to cart!');
      alert('Item added to cart!');
    });
  });
});
