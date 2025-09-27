function renderProdutoTabela(produto) {
    return `
        <tr>
            <td>${produto.nome}</td>
            <td>MZN ${produto.preco}</td>
            <td class="actions-cell">
                <button class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `
}
