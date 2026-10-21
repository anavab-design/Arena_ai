# Arena

Site da Arena, secretária virtual com IA para clínicas. Feito com TanStack Start, React 19, Tailwind 4 e shadcn/ui.

## Rodar localmente

```sh
npm install
npm run dev
```

## Build

```sh
npm run build                      # gera .output/
node .output/server/index.mjs      # servidor Node em http://localhost:3000
```

Na Vercel o build detecta o ambiente sozinho: basta importar o repositório, sem configuração extra.

## Imagens

| Pasta | O que tem |
|---|---|
| `src/assets/sistema-*.webp` | Telas do painel (Visão geral, nota, conversa, funil). As fontes em HTML ficam fora do repositório |
| `src/assets/fotos/*.webp` | Fotos das seções "Por que Arena" e "Arena em ação" |

Para trocar uma foto, substitua o arquivo mantendo o nome, ou importe outro arquivo no componente. Nos cards de cases (`src/components/site/Showcase.tsx`) a foto é opcional: sem `image`, o card volta ao fundo escuro.

Espaços que ainda podem receber imagem:
- Avatares ao lado de "+1000 clínicas" no topo (`Hero.tsx`)
- Cards "Integra com sua agenda" e "Reduz faltas de pacientes" (`Benefits.tsx`)
- Faixa de logos de clientes no topo (`Hero.tsx`), hoje com nomes de exemplo
