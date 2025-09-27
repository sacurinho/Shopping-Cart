function inicializarApplicacao() {
    mostrarProdutos(getProdutos()) 
    mostrarCarrinho(getCarrinho())
}

function mostrarProdutos(listaProdutos) {
    let produtosHtml = ""

    listaProdutos.forEach((produto) => {
        produtosHtml = produtosHtml + renderProduto(produto)
    });

    document.getElementById("product-grid").innerHTML = produtosHtml
    document.getElementById("product-count").textContent = `(${listaProdutos.length})`

}  

