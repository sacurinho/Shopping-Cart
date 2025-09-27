function adicionarAoCarrinho(btn) {
    let card = btn.parentElement;
    let nome = card.querySelector('h3').innerText;
    let preco = card.querySelector('p').innerText;

    let produto = { nome:nome, preco:preco, qt:1  };

    let carrinhoAtual = getCarrinho();
    carrinhoAtual.push(produto);
    setCarrinho(carrinhoAtual);

    mostrarCarrinho(getCarrinho());
}

function encerrarCompra(){
    alert("Compra efetuada com sucesso!")
    setCarrinho([])
}

function alterarQt(btn) {
    let card = btn.parentElement.parentElement.parentElement;
    let nome = card.querySelector('.produto-nome').innerText;
    let qt = parseInt(card.querySelector('.quantity-input').value);

    let unitPrice =0;

    let carrinhoAtual = getCarrinho();
    for(let i = 0; i < carrinhoAtual.length; i++) {
        if(carrinhoAtual[i].nome === nome) {
            carrinhoAtual[i].qt = qt;

            unitPrice = parseFloat(carrinhoAtual[i].preco.replace('MZN ', ''))
        }
    }
    
    let precoTxt = card.querySelector('.price-new');
    precoTxt.innerText = `MZN ${(unitPrice * qt).toFixed(2)}`;

    setCarrinho(carrinhoAtual);
    mostrarCarrinho(getCarrinho());

}



function mostrarCarrinho(listaCarrinho) {
    let carrinhoHtml = ""
    let totalPrice = 0;


    listaCarrinho.forEach((produtoNoCarrinho) => {

        carrinhoHtml = carrinhoHtml + renderCarrinho(produtoNoCarrinho)
        totalPrice += parseFloat(produtoNoCarrinho.preco.replace('MZN ', '') ) * produtoNoCarrinho.qt;

    });


    document.getElementById("cart-items").innerHTML = carrinhoHtml;
    document.getElementById("cart-total-quantity").textContent = listaCarrinho.length
    document.getElementById("header-cart-count").textContent = `${listaCarrinho.length}`
    document.getElementById("cart-total-price").textContent = `MZN ${totalPrice.toFixed(2)}`;

} 
