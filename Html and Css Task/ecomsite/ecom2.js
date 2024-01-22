function logout() {
    window.location.href = 'index.html';
}
document.addEventListener('DOMContentLoaded', function () {
    fetch('products.json')
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayProducts(products) {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('product-details');

    const name = document.createElement('h3');
    name.textContent = product.name;
    details.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price.toFixed(2)}`;
    details.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));
    details.appendChild(addToCartButton);

    card.appendChild(details);

    return card;
}

function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function proceedToPayment() {
    window.location.href = 'cart.html';
}
