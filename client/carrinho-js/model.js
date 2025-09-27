function setCarrinho(listaCarrinho) {
    localStorage.setItem("carrinho", JSON.stringify(listaCarrinho))
}

function getCarrinho() {
    let listaCarrinhoString = localStorage.getItem("carrinho")
    // Se o elemento nao existir em LocalStorage
    if (listaCarrinhoString == null) {
        return []
    }
    else {
        return JSON.parse(listaCarrinhoString)
    }
}

