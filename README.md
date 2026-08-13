# Pixel Perfect Pages

Preciso que você reproduza fielmente um template de design (Figma/Sketch/XD) em código e depois faça deploy na Vercel. Siga este processo:

## CONTEXTO

- Vou fornecer: [link do arquivo Figma] e/ou screenshots em alta resolução das telas, 

  exports de ícones/imagens em SVG/PNG, e um arquivo design-tokens.json com cores, 

  tipografia, espaçamentos e sombras (se eu tiver conseguido extrair).

- Stack desejada: Next.js + TypeScript + Tailwind CSS

- Se o MCP do Figma estiver conectado, use-o para ler a estrutura real (componentes, 

  variáveis, layout, auto-layout) em vez de adivinhar pelas imagens.

## PASSO 1 — Setup do projeto

Crie um projeto Next.js novo com Tailwind já configurado. Configure o tailwind.config 

com os tokens de design que eu fornecer (cores customizadas, fontes, espaçamentos) 

em vez de usar os valores padrão do Tailwind.

## PASSO 2 — Extração de fidelidade

Antes de codar, liste para cada tela/componente que eu enviar:

- Paleta de cores exata (hex)

- Tipografia (família, pesos, tamanhos, line-height, letter-spacing)

- Grid e espaçamentos (padding, margin, gap)

- Border-radius, sombras, estados (hover, active, disabled)

- Breakpoints responsivos visíveis no design

Me avise se algo estiver ambíguo ou não visível na imagem/arquivo antes de assumir.

## PASSO 3 — Construção

Construa tela por tela, componentizando o que se repete (botões, cards, inputs, 

navbar, etc.) em vez de duplicar código. Use nomes de componentes claros. 

Mantenha a estrutura semântica de HTML.

## PASSO 4 — Verificação visual

Depois de cada tela, rode o dev server, tire um screenshot automatizado 

(Playwright/puppeteer) e compare visualmente com a imagem de referência que 

eu forneci. Aponte divergências de espaçamento, cor ou proporção antes de 

seguir para a próxima tela.

## PASSO 5 — Responsividade

Garanta que cada tela funcione em mobile, tablet e desktop, seguindo os 

breakpoints do design original (ou um padrão razoável se não houver 

versão mobile no template).

## PASSO 6 — Deploy

Ao final, prepare o projeto para deploy na Vercel:

- Configure vercel.json se necessário

- Rode o build local para garantir que não há erros

- Rode `vercel --prod` (ou me diga os comandos exatos para eu rodar)

- Me dê a URL final

Comece perguntando quais telas/arquivos vou enviar primeiro e em que ordem 

devo priorizar.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pixel-perfect-craft-610.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b97b618d-63e9-4efb-8896-3272d8dc5afd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
