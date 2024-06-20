document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});

function updateCart() {
    fetch('/cart')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const cartItems = doc.getElementById('cart-items').innerHTML;
            document.getElementById('cart-items').innerHTML = cartItems;
        });
}
