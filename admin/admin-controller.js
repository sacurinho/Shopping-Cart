function inicializarApplicacao() {
    let produtos = getProdutos()
    mostrarProdutosTabela(produtos)
}

function adicionarProduto() {
    let nome = document.getElementById('product-name')
    let preco = document.getElementById('product-price')

    produto = {
        nome: nome.value,
        preco: preco.value
    }

    let produtosAtuais = getProdutos()
    produtosAtuais.push(produto)

    setProdutos(produtosAtuais)

    nome.value = ""
    preco.value = ""
    mostrarProdutosTabela(getProdutos())
}

function mostrarProdutosTabela(listaProdutos) {
    let produtosHtml = ""

    listaProdutos.forEach((produto) => {
        produtosHtml += renderProdutoTabela(produto)
    });

    document.getElementById("product-list").innerHTML = produtosHtml
    document.getElementById("product-count").textContent = listaProdutos.length
}


