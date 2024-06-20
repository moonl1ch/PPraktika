document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            addToCart(name, price, img);
            button.classList.add('added');
            const cartNotification = document.getElementById('cart-notification');
            cartNotification.classList.remove('hidden');
            setTimeout(() => {
                cartNotification.classList.add('hidden');
            }, 2000);
        });
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const name = event.target.getAttribute('data-name');
            removeFromCart(name);
        }
    });
});

function addToCart(name, price, img) {
    fetch('/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, img })
    }).then(response => response.json()).then(data => {
        if (data.success) {
            updateCart();
        }
    });
}

function removeFromCart(name) {
    fetch('/cart/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    }).then(response => response.json()).then(data => {
        if (data.success) {
            updateCart();
        }
    });
}

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
