# 🎮 GameHub

Projeto web desenvolvido em dupla para a disciplina de Front-End.

O **GameHub** é uma landing page com temática gamer criada para apresentar uma coleção de jogos de uma plataforma fictícia. O projeto possui uma interface responsiva, cards de jogos, sistema de interação com JavaScript e um modal para simulação de compra.

## 🛠️ Tecnologias utilizadas

- HTML5
- Tailwind CSS v3
- JavaScript
- Node.js / npm
- Git e GitHub

## 🎨 Identidade visual

O projeto utiliza uma identidade visual **dark gamer**, baseada em tons escuros com roxo, ciano e azul.

Principais cores utilizadas:

- Fundo principal: `#0B1020`
- Fundo dos cards: `#151C32`
- Cor principal: `#7C3AED`
- Cor de destaque: `#06B6D4`
- Cor secundária: `#2563EB`
- Texto principal: `#F8FAFC`
- Texto secundário: `#94A3B8`
- Borda: `#273449`
- Sucesso: `#22C55E`
- Erro: `#EF4444`

As cores foram configuradas no `tailwind.config.js` utilizando nomes personalizados, como `bg-fundo-principal`, `bg-fundo-card`, `text-cor-principal` e `text-cor-destaque`.

## 📁 Estrutura do projeto

```text
meu-projeto/
├── index.html
├── dist/
│   └── output.css
|
├── src/
│   ├── style/
│   │   └── input.css
│   │   
│   ├── img/
│   │   └── imagens dos jogos
│   │
│   └── script/
│       └── script.js
│
├── tailwind.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> `input.css` contém a entrada do Tailwind, enquanto `output.css` é o arquivo CSS gerado pelo processo de build.

## ⚙️ Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/andrew-clarck/somativa-front-andrew-matheus.git
```

### 2. Entrar na pasta do projeto

```bash
cd meu-projeto
```

### 3. Instalar as dependências

```bash
npm install
```

O `npm install` utiliza o `package.json` para instalar as dependências necessárias do projeto.


## ▶️ Executando o projeto

Para gerar/rodar o arquivo CSS do Tailwind, execute:

```bash
npx tailwindcss -i ./src/style/input.css -o ./dist/output.css --watch
```

O comando gera/roda o arquivo:

```text
dist/output.css
```

Depois, abra o `index.html` no navegador.

Também é possível utilizar uma extensão como o **Live Server** no VS Code para facilitar o desenvolvimento.

## 🎮 Funcionalidades

### Cards de jogos

Os jogos são armazenados no JavaScript através de objetos da classe `Jogo`.

Cada jogo possui:

- Título
- Descrição
- Preço
- Imagem

O JavaScript utiliza esses dados para criar os cards dinamicamente dentro da seção de jogos.

### Modal de compra

Ao clicar em um card, é aberto um **modal de compra**.

O modal apresenta:

- Nome do jogo selecionado
- Preço
- Campo para nome
- Campo para e-mail
- Botão para confirmar a compra

A compra é apenas uma **simulação**, sem processamento de pagamento ou integração com banco de dados.

### Formulário de contato

A página também possui uma seção de contato com:

- Nome
- E-mail
- Assunto
- Mensagem
- Botão de envio

## 📱 Responsividade

O projeto utiliza os breakpoints do Tailwind CSS para adaptar o layout a diferentes tamanhos de tela.

Principais breakpoints utilizados:

- `md:` — telas médias
- `lg:` — telas grandes

O grid dos jogos utiliza:

```text
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
```

Dessa forma:

- 📱 Celular: 1 card por linha
- 📱 Tablet: 2 cards por linha
- 💻 Desktop: 3 cards por linha

## 🧩 Recursos do Tailwind utilizados

O projeto utiliza diversas utilities do Tailwind CSS, incluindo:

- Grid
- Flexbox
- Espaçamentos
- Cores personalizadas
- Tipografia
- Bordas
- Arredondamento
- Sombras
- Responsividade
- Estados de `hover`
- Posicionamento
- Classes utilitárias para formulários

A Navbar foi construída manualmente utilizando Flexbox, sem utilizar um componente pronto.

## 📜 JavaScript

O JavaScript é utilizado para:

- Criar a classe `Jogo`
- Armazenar a lista de jogos
- Gerar os cards dinamicamente
- Formatar os preços
- Abrir e fechar o modal de compra
- Exibir as informações do jogo selecionado
- Simular a confirmação da compra

## 👥 Integrantes

- **Membro 1:** Andrew Clarck
- **Membro 2:** Matheus Felippe de Andrade

## 📌 Objetivo

O objetivo do projeto é aplicar na prática os conhecimentos de **Front-End, Tailwind CSS e JavaScript**, desenvolvendo uma página responsiva, organizada, funcional e com identidade visual própria.

O projeto busca demonstrar conhecimentos de:

- HTML5
- CSS através do Tailwind CSS
- JavaScript
- Grid responsivo
- Flexbox
- Componentização através de funções e classes JavaScript
- Manipulação do DOM
- Eventos de clique
- Formulários
- Modais
- Responsividade com breakpoints

## 📚 Projeto acadêmico

Projeto desenvolvido como atividade avaliativa da disciplina de **Front-End**.

**Ano:** 2026
