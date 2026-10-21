import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// O nitro detecta a Vercel sozinho no build de lá; localmente gera um servidor Node.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // src/server.ts envolve o servidor do TanStack Start com a página de erro
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
});
