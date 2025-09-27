const cartOverlay = document.getElementById('cart-overlay');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');

openCartBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
});

cartOverlay.addEventListener('click', (event) => {
    if (event.target.id === 'cart-overlay') {
        cartOverlay.style.display = 'none';
    }
});


const finalizarCompraBtn = document.getElementById('checkout-btn');
finalizarCompraBtn.addEventListener('click', encerrarCompra);