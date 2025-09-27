function adicionarAoCarrinho(btn) {
    let card = btn.parentElement;
    let nome = card.querySelector('h3').innerText;
    let preco = card.querySelector('p').innerText;

    let produto = { nome, preco };

    let carrinhoAtual = getCarrinho();
    carrinhoAtual.push(produto);
    setCarrinho(carrinhoAtual);

    mostrarCarrinho(getCarrinho());
}


function mostrarCarrinho(listaCarrinho) {
    let carrinhoHtml = ""

    listaCarrinho.forEach((produtoNoCarrinho) => {
        carrinhoHtml = carrinhoHtml + renderCarrinho(produtoNoCarrinho)
    });

    document.getElementById("cart-items").innerHTML = carrinhoHtml;
    document.getElementById("cart-total-quantity").textContent = listaCarrinho.length
    document.getElementById("header-cart-count").textContent = `${listaCarrinho.length}`

}  
