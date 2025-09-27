function inicializarApplicacao() {
    let produtos = getProdutos()
    mostrarProdutos(produtos) 
    mostrarProdutosCarrinho(produtos)
}

function mostrarProdutos(listaProdutos) {
    let produtosHtml = ""

    listaProdutos.forEach((produto) => {
        produtosHtml = produtosHtml + renderProduto(produto)
    });

    document.getElementById("product-grid").innerHTML = produtosHtml
}  

function adicionarAoCarrinho() {
    let nome = document.getElementById('product-card').querySelector('h3').innerText 
    let preco = document.getElementById('product-price').querySelector('p').innerText
   
    produto = {
        nome: nome,
        preco: preco
    }

    let produtosAtuais = getProdutos()
    produtosAtuais.push(produto)

    setProdutos(produtosAtuais)

    nome.value = ""
    preco.value = ""
}
