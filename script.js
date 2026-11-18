const mapa = document.querySelector(".mapa-assentos");

// PRIMEIRO: criar as cadeiras
for (let numero = 1; numero <= 45; numero++) {

    if (numero === 4) {
        continue;
    }

    const botao = document.createElement("button");
    botao.type = "button";
    botao.classList.add("assento");

    if (numero === 3 || (numero >= 7 && (numero - 7) % 4 === 0)) {
        botao.classList.add("lado-direito");
    }

    if (numero === 5) {
        botao.style.gridColumn = "1";
    }

    if (numero === 3) {
        botao.classList.add("ocupado");
    }

    botao.innerHTML = `
        <img src="imagens/assento.png" alt="Assento">
        <span>${String(numero).padStart(2, "0")}</span>
    `;

    mapa.appendChild(botao);
}

// DEPOIS: adicionar os eventos de clique
const cadeiras = document.querySelectorAll(".assento");

cadeiras.forEach(function(cadeira) {
    cadeira.addEventListener("click", function() {

        if (cadeira.classList.contains("ocupado")) {
            return;
        }

        cadeira.classList.toggle("selecionado");

    });
});