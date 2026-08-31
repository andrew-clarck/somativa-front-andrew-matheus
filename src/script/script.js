class Jogo {
  constructor(titulo, descricao, preco) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.categoria = preco;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }
}

const listaDeJogos = [
  new Jogo(
    "Undertale",
    "Undertale é um aclamado jogo eletrônico de RPG independente onde você controla uma criança humana que caiu em um submundo repleto de monstros.",
    35.99,
  ),
  new Jogo(
    "Omori",
    "OMORI é um jogo de RPG de terror psicológico com visual desenhado à mão, onde você alterna entre um mundo de sonhos vibrante e a realidade para enfrentar os traumas, a culpa e os segredos sombrios do passado de um garoto isolado.",
    102.99,
  ),
  new Jogo(
    "Hollow Knight",
    "Hollow Knight é um aclamado jogo de ação e aventura em 2D no estilo Metroidvania desenvolvido pela Team Cherry.",
    46.99,
  ),
  new Jogo(
    "Five Nights at Freddy's",
    "Five Nights at Freddy's (FNAF) é um jogo de terror de sobrevivência onde você é um guarda noturno que precisa vigiar câmeras e economizar energia para sobreviver a robôs animatrônicos assassinos até o amanhecer.",
    10.99,
  ),
  new Jogo(
    "Rayman Legends",
    "Rayman Legends é um clássico jogo de plataforma onde você controla um herói sem membros (braços, pernas ou pescoço) que precisa correr, saltar e planar por mundos coloridos e fantasiosos para salvar seus amigos e restaurar o equilíbrio do universo.",
    154.99,
  ),
  new Jogo(
    "Terraria",
    "Terraria é um jogo de aventura e sobrevivência em estilo sandbox 2D, onde você pode explorar, cavar, construir e lutar. O mundo é gerado proceduralmente e repleto de tesouros para descobrir, inimigos para enfrentar e chefes gigantes para derrotar.",
    32.99,
  ),
];

const containerJogos = document.querySelector("#listaJogos");

// Função dedicada para renderizar UM prato → boa prática de organização.
// Separar em função pequena facilita testar e trocar depois.
function criarCardJogo(jogo) {
  const card = document.createElement("article");
  card.className =
    "card-jogo p-4 bg-fundo-card border border-borda rounded-xl shadow-sm h-full";

  // Template string: mais legível que concatenar com "+"
  card.innerHTML = `
    <h3 class="text-xl font-bold text-texto-principal mb-2">${jogo.titulo}</h3>
    <span class="text-sm text-texto-secundario block mb-3">${jogo.descricao}</span>
    <div class="text-lg font-bold text-sucesso">${jogo.formatarPreco()}</div>
  `;

  card.addEventListener("click", () => {
    alert(
      `🎮 ${jogo.titulo}\n\n` +
        `Categoria: ${jogo.descricao}\n` +
        `Preço: ${jogo.formatarPreco()}`,
    );
  });

  return card;
}

function renderizarListaJogos() {
  containerJogos.innerHTML = "";

  listaDeJogos.forEach((jogo) => {
    const card = criarCardJogo(jogo);
    containerJogos.appendChild(card);
  });
}

renderizarListaJogos();
