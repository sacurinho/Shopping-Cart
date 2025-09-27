function renderProduto(produto) {
    return ` <div class="product-card">
                <h3>${produto.nome}</h3>
                <p>MZN ${produto.preco}</p>
                <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
            </div>`
}

function renderProdutoCarrinho(produto) {
    return `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${produto.nome}</h4>
                <p>MZN ${produto.preco}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `
}
