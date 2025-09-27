inicializarApplicacao();


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

let addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', adicionarAoCarrinho)
});
