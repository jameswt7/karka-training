document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');

    cartItems.forEach(item => {
        const cartItemCard = createCartItemCard(item);
        cartContainer.appendChild(cartItemCard);
    });
});

function createCartItemCard(item) {
    const card = document.createElement('div');
    card.classList.add('cart-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('cart-item-details');

    const name = document.createElement('h3');
    name.textContent = item.name;
    details.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `Price: $${item.price.toFixed(2)}`;
    details.appendChild(price);

    card.appendChild(details);

    return card;
}
