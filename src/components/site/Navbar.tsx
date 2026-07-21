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
      <div className="mx-auto max-w-[1240px] px-4 pt-4 sm:px-6 sm:pt-6">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-border/70 bg-background/85 px-4 py-2.5 shadow-[0_1px_2px_rgba(15,17,21,0.04)] backdrop-blur-md sm:px-5">
          <a href="#" className="shrink-0 text-[1.05rem] font-extrabold tracking-tight text-foreground">
            Arena
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
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
            <div className="hidden items-center gap-2 rounded-full bg-muted px-3.5 py-1.5 text-muted-foreground md:flex">
              <Search className="h-3.5 w-3.5" strokeWidth={2.25} />
              <span className="text-[12px]">Buscar</span>
            </div>
            <a
              href="#contato"
              className="hidden shrink-0 rounded-full bg-primary px-4 py-2 text-[12.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex"
            >
              Fale com um especialista
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full bg-muted text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-border/70 bg-background/95 p-4 shadow-[0_10px_30px_-15px_rgba(15,17,21,0.15)] backdrop-blur-md lg:hidden">
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
