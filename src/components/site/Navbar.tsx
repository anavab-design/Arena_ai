import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Planos", href: "#planos" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-[1280px] px-6 pt-6 sm:px-8 sm:pt-8">
        <nav className="flex items-center justify-between gap-6 rounded-full border border-border/60 bg-background/80 px-5 py-2.5 backdrop-blur-md sm:px-6">
          <a href="#" className="shrink-0 text-[1.05rem] font-bold tracking-tight text-foreground">
            Arena
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Buscar"
              className="hidden h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:grid"
            >
              <Search className="h-4 w-4" strokeWidth={2} />
            </button>
            <a
              href="#contato"
              className="hidden shrink-0 rounded-full bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex"
            >
              Fale com um especialista
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full text-foreground hover:bg-muted lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-border/60 bg-background/95 p-4 backdrop-blur-md lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  Fale com um especialista
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
