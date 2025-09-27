function setProdutos(listaDeProdutos) {
    localStorage.setItem("produtos", JSON.stringify(listaDeProdutos))
}

function getProdutos() {
    let listaProdutosString = localStorage.getItem("produtos")
    // Se o elemento nao existir em LocalStorage
    if (listaProdutosString == null) {
        return []
    } 
    else {
        return JSON.parse(listaProdutosString)
    }
}

