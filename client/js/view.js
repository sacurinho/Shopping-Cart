function renderProduto(produto) {
    return ` <div class="product-card">
                <h3>${produto.nome}</h3>
                <p>MZN ${produto.preco}</p>
                <button class="add-to-cart-btn" onclick="adicionarAoCarrinho(this)">Adicionar ao Carrinho</button>
            </div>`
}

