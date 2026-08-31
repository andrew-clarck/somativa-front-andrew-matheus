# 🎮 GameHub

Projeto web desenvolvido em dupla para a disciplina de Front-End.

O **GameHub** é uma landing page com temática gamer, criada para apresentar jogos, novidades e informações de uma plataforma fictícia voltada para o universo dos games.

## 🛠️ Tecnologias utilizadas

- HTML5
- Tailwind CSS v3
- Node.js / npm
- Git e GitHub

## 🎨 Identidade visual

O projeto utiliza uma identidade visual com tema **dark gamer**, baseada principalmente em tons de:

- Roxo: `#7C3AED`
- Ciano: `#06B6D4`
- Azul escuro: `#0B1020`
- Fundo dos cards: `#151C32`
- Texto principal: `#F8FAFC`

## 📁 Estrutura do projeto

```text
meu-projeto/
├── index.html
├── src/
│   ├── css/
│   │   ├── input.css
│   │   ├── output.css
│   │   └── style.css
│   └── js/
│       └── script.js
├── tailwind.config.js
├── package.json
└── README.md
```

> `output.css` é o arquivo CSS gerado pelo Tailwind.

## ⚙️ Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd meu-projeto
```

Instale as dependências:

```bash
npm install
```

Caso o Tailwind ainda não esteja instalado:

```bash
npm install -D tailwindcss@3
```

## ▶️ Executando o projeto

Para gerar o CSS do Tailwind:

```bash
npm run build
```

Após o comando, o Tailwind irá gerar o arquivo:

```text
src/css/output.css
```

Depois, abra o `index.html` no navegador ou utilize uma extensão como o **Live Server** no VS Code.

## 📱 Responsividade

O projeto utiliza as classes responsivas do Tailwind CSS para adaptar o layout a diferentes tamanhos de tela.

São utilizados principalmente os breakpoints:

- `md:` — telas médias
- `lg:` — telas grandes

O grid dos conteúdos é adaptado para diferentes dispositivos utilizando classes como:

```text
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
```

## 👥 Integrantes

- **Membro 1:** Nome do integrante
- **Membro 2:** Nome do integrante

## 📌 Objetivo

O objetivo do projeto é aplicar na prática os conhecimentos de **Front-End e Tailwind CSS**, desenvolvendo uma página responsiva, organizada e com identidade visual própria.

Entre os principais recursos utilizados estão:

- Grid responsivo;
- Flexbox;
- Navbar construída manualmente;
- Cards;
- Botões;
- Tipografia;
- Cores;
- Espaçamentos;
- Responsividade com breakpoints.

## 📚 Projeto acadêmico

Projeto desenvolvido como atividade avaliativa da disciplina de **Front-End**.

**Ano:** 2026
