let carrinho = [];

function addToCart(nome, preco) {
  carrinho.push({ nome, preco });
  renderCarrinho();
}

function renderCarrinho() {
  const carrinhoItens = document.getElementById("carrinho-itens");
  carrinhoItens.innerHTML = "";

  let total = 0;
  carrinho.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
    carrinhoItens.appendChild(li);
    total += item.preco;
  });

  document.getElementById("total").textContent = `Total: R$${total.toFixed(2)}`;
}
