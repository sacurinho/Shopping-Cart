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
}  

function encerrarCompra() {
    alert("Compra efetuada com sucesso!")
    setCarrinho([])
    mostrarCarrinho(getCarrinho())
}
