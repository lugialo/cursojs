document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");
  const response = await fetch(href);

  if (response.status != 200) throw new Error("Erro 404");
  const html = await response.text();
  carregaResultado(html);
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

fetch("pagina2.html")
  .then((resposta) => {
    if (resposta.status !== 200) throw new Error("Erro!");
    return resposta.text();
  })
  .then((html) => console.log(html))
  .catch((e) => console.error(e));
