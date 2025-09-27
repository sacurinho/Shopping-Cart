function renderCarrinho(produto) {
    // Calcular initial line total for display
    const precoTotal = (parseFloat(produto.preco.replace("MZN", "").trim()) * parseFloat(produto.qt)).toFixed(2)

    return `
        <div class="cart-item">
            <div class="item-details">
                <p class="produto-nome">${produto.nome}</p>
                <div class="item-prices">
                    <span class="price-new">
                        MZN ${precoTotal}
                    </span>
                </div>
            </div>
            <div class="item-controls">
                <div class="quantity-control">
                    <input type="number" class="quantity-input" value="${produto.qt}" min="1" onClick="alterarQt(this)"/>
                </div>
                <button class="remove-item">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm208-400V80h-96V64h96zM384 96h-64V64h-16V32h-96V16H160v16H144v32H80v32h304zM240 432h-32v-240h32zm80 0h-32v-240h32zm-160 0h-32v-240h32z"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
}
