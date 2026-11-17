
const URL_API = "https://fakestoreapi.com/products";

const resultadoPainel = document.getElementById("resultadoPainel");
const mensagemFeedback = document.getElementById("mensagemFeedback");

async function carregarProduto() {
    try {
        const resposta = await fetch(URL_API);

        if (!resposta.ok) {
            throw new Error("Falha ao buscar dados via API");
        }

        const produtos = await resposta.json();

        let htmlCard = "";

        produtos.forEach(produto => {

            htmlCard += `
                <div>
                    <div class="produto-img-container">
                        <img src="${produto.image}" class="produto-img">
                    </div>

                    <span class="produto-categoria">${produto.category}</span>

                    <h3 class="produto-titulo">${produto.title}</h3>

                    <div class="produto-preco">${produto.price.toFiced(2)}</div>
                </div>
            `
        });

        resultadoPainel.innerHTML = htmlCard;

        mensagemFeedback.textContent = "Produtos carregados com sucesso!";

    } catch (error) {

        mensagemFeedback.textContent = error.message;

        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", carregarProduto);
