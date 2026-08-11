# Panela de Barro — site da marmitaria

Site institucional/cardápio para marmitaria, feito em React + Vite, com foco em
apresentar o cardápio e converter visitantes em pedidos pelo WhatsApp.

## Como executar o projeto

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve a build de produção localmente para conferir
```

## Onde alterar cada coisa

Tudo o que muda com frequência está centralizado em **`src/data/`** — você não
precisa mexer nos componentes para atualizar informações do negócio.

| O que alterar | Arquivo |
|---|---|
| Nome da empresa, WhatsApp, telefone, endereço, horário, Instagram | `src/data/config.js` |
| Produtos, preços, categorias, descrições do cardápio | `src/data/products.js` |
| Destaques, passos de "como pedir", itens da galeria, depoimentos | `src/data/content.js` |
| Cores, fontes, espaçamentos | `src/styles/index.css` (variáveis no topo, em `.site-root`) |

### Nome da empresa
Em `src/data/config.js`, altere `CONFIG.name` e `CONFIG.tagline`.

### Telefone / WhatsApp
Em `src/data/config.js`:
- `CONFIG.whatsapp`: número usado nos links de pedido, no formato `55` + DDD + número, só dígitos (ex.: `5562999999999`).
- `CONFIG.phoneDisplay`: como o telefone aparece formatado na tela (ex.: `(62) 9 9999-9999`).

Como o número está centralizado em uma única constante (`CONFIG.whatsapp`), todos
os botões "Pedir", "Fazer pedido" e o botão flutuante do WhatsApp são atualizados
automaticamente.

### Endereço e horário
Em `src/data/config.js`: `CONFIG.address` e `CONFIG.hours`.

### Produtos e preços
Em `src/data/products.js`, edite o array `PRODUCTS`. Cada produto tem:

```js
{ id: 1, name: "Marmita Tradicional", category: "marmitas", price: 18.9,
  desc: "Arroz, feijão, carne, salada e acompanhamento.", icon: Soup, badge: "Mais pedido" }
```

- `category` precisa bater com uma das chaves de `CATEGORIES` no mesmo arquivo.
- `icon` é qualquer ícone importado de [`lucide-react`](https://lucide.dev/icons/).
- `badge` é opcional (selo tipo "Mais pedido"); remova a propriedade se não quiser selo.
- Para adicionar um produto novo, basta copiar um objeto do array e mudar os valores.

### Trocar as imagens (placeholders → fotos reais)
Por padrão o site usa blocos ilustrados (`PlaceholderArt`) no lugar de fotos, já
que nenhuma imagem real foi fornecida no briefing. Para usar fotos reais:

1. Coloque os arquivos de imagem em `src/assets/` (crie a pasta se não existir).
2. Em cada componente que usa `<PlaceholderArt ... />` (`Hero.jsx`, `ProductCard.jsx`,
   `About.jsx`, `Gallery.jsx`), troque o componente por uma tag `<img>` normal, por
   exemplo:
   ```jsx
   import marmitaEspecial from "../assets/marmita-especial.jpg";
   // ...
   <img src={marmitaEspecial} alt="Marmita especial" className="product-photo" />
   ```
3. O CSS já tem classes de card e proporção prontas (`.product-media`,
   `.hero-plate`, `.about-visual`, `.gallery-item`) — a imagem só precisa de
   `width: 100%; height: 100%; object-fit: cover; border-radius: inherit;`.

### Mapa (localização)
Em `src/components/Contact.jsx`, o bloco `.map-placeholder` pode ser substituído
por um `<iframe>` do Google Maps (Google Maps → Compartilhar → Incorporar mapa).

## Deploy

O projeto gera arquivos estáticos (`npm run build` → pasta `dist/`), então pode
ser publicado em qualquer serviço de hospedagem estática:

- **Vercel**: importe o repositório no [vercel.com](https://vercel.com) — ele detecta o Vite automaticamente.
- **Netlify**: `npm run build`, depois arraste a pasta `dist/` em [app.netlify.com/drop](https://app.netlify.com/drop), ou conecte o repositório (build command `npm run build`, publish directory `dist`).
- **GitHub Pages / outro host estático**: rode `npm run build` e publique o conteúdo da pasta `dist/`.

## Estrutura do projeto

```
src/
├── components/
│   ├── ui/                 # PlaceholderArt, SteamIcon, SectionEyebrow
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   ├── Menu.jsx
│   ├── ProductCard.jsx
│   ├── HowToOrder.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   └── FloatingWhatsApp.jsx
├── data/
│   ├── config.js            # nome, whatsapp, telefone, endereço, horário
│   ├── products.js          # cardápio
│   └── content.js           # destaques, passos, galeria, depoimentos
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Observação sobre as imagens

Este projeto foi entregue com blocos ilustrados coloridos no lugar de fotos reais
de pratos (nenhuma imagem foi fornecida no briefing e imagens genéricas de banco
de imagens poderiam não representar os pratos reais da marmitaria). Veja a seção
"Trocar as imagens" acima para substituí-los por fotos reais antes de publicar.
