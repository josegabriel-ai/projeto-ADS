# Panela de Barro — site da marmitaria

Site institucional/cardápio para marmitaria, em HTML, CSS e JavaScript puros
(sem build, sem instalação) — é só abrir o `index.html` no navegador.

## Como executar

Basta dar duplo clique no arquivo `index.html`, ou abrir com "Abrir com... Navegador".

Se preferir editar com Live Server no VSCode (recomendado, para ter recarregamento
automático ao salvar): instale a extensão "Live Server", clique com o botão
direito em `index.html` → "Open with Live Server".

## Onde alterar cada coisa

Tudo o que muda com frequência está no arquivo **`js/data.js`**:

| O que alterar | Onde |
|---|---|
| Nome da empresa, WhatsApp, telefone, endereço, horário | `js/data.js` → objeto `CONFIG` |
| Produtos, preços, categorias, descrições do cardápio | `js/data.js` → array `PRODUCTS` |
| Destaques, passos de "como pedir", galeria, depoimentos | `js/data.js` |
| Cores, fontes, espaçamentos | `css/styles.css` (variáveis no topo, em `:root`) |
| Textos fixos das seções (títulos, "Sobre nós" etc.) | `index.html` |

### Nome da empresa
Em `js/data.js`, `CONFIG.name`.

### Telefone / WhatsApp
Em `js/data.js`:
- `CONFIG.whatsapp`: número usado nos links de pedido, formato `55` + DDD + número, só dígitos (ex.: `5562999999999`).
- `CONFIG.phoneDisplay`: como o telefone aparece formatado na tela.

Como o número está centralizado nessa única constante, todos os botões "Pedir",
"Fazer pedido" e o botão flutuante do WhatsApp são atualizados automaticamente.
Nos botões de "Endereço/Telefone/WhatsApp" da seção de contato e do rodapé
(escritos direto no `index.html`), atualize o texto manualmente para bater com o `CONFIG`.

### Endereço e horário
Em `js/data.js`: `CONFIG.address` e `CONFIG.hours` (e replique o texto no `index.html`,
na seção de contato/rodapé, já que esses trechos são texto fixo).

### Produtos e preços
Em `js/data.js`, edite o array `PRODUCTS`. Cada produto tem:

```js
{ id: 1, name: "Marmita Tradicional", category: "marmitas", price: 18.9,
  desc: "Arroz, feijão, carne, salada e acompanhamento.", icon: "soup", badge: "Mais pedido" }
```

- `category` precisa bater com uma das chaves de `CATEGORIES` no mesmo arquivo.
- `icon` é o nome de um ícone definido em `js/icons.js` (soup, salad, chef-hat, flame,
  utensils, ice-cream, cooking-pot, sparkles, truck, wallet...).
- `badge` é opcional (selo tipo "Mais pedido"); remova a propriedade se não quiser selo.
- Para adicionar um produto novo, copie um objeto do array e mude os valores.

### Trocar as imagens (placeholders → fotos reais)
O site usa blocos ilustrados coloridos no lugar de fotos, já que nenhuma imagem
real foi fornecida. Para usar fotos reais:

1. Coloque os arquivos de imagem em `assets/`.
2. No `js/main.js`, na função `placeholderArt(...)`, troque o HTML gerado por uma
   tag `<img src="assets/nome-do-arquivo.jpg" alt="..." />`.
3. Para a foto do Hero e da seção "Sobre", faça o mesmo diretamente no `index.html`
   (procure pelos blocos com classe `placeholder-art`).
4. O CSS já tem as proporções e bordas arredondadas prontas — a imagem só precisa
   de `width: 100%; height: 100%; object-fit: cover;`.

### Mapa (localização)
Na seção de contato do `index.html`, o bloco com classe `map-placeholder` pode
ser substituído por um `<iframe>` do Google Maps (Google Maps → Compartilhar →
Incorporar mapa).

## Deploy

Como é um site 100% estático, pode ser publicado em qualquer hospedagem simples:

- **Netlify**: arraste a pasta inteira em [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: importe a pasta como projeto estático em [vercel.com](https://vercel.com).
- **GitHub Pages**: suba os arquivos para um repositório e ative o Pages nas configurações.
- **Qualquer hospedagem compartilhada**: envie os arquivos por FTP para a pasta pública do site.

## Estrutura do projeto

```
index.html          # estrutura de todas as seções
css/styles.css       # todo o visual do site
js/data.js           # dados editáveis: empresa, cardápio, depoimentos etc.
js/icons.js          # biblioteca de ícones SVG usada no site
js/main.js           # lógica: menus, filtros do cardápio, galeria/lightbox
assets/              # onde colocar fotos reais
```

## Observação sobre as imagens

Este projeto foi entregue com blocos ilustrados coloridos no lugar de fotos reais
de pratos, já que nenhuma imagem foi fornecida no briefing. Veja "Trocar as
imagens" acima para substituí-los antes de publicar o site.
