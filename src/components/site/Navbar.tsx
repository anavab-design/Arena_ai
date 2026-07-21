import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#solucoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-8 pt-8 sm:px-12 sm:pt-10">
        <a href="#" className="shrink-0 text-[1.6rem] font-extrabold tracking-tight text-foreground">
          Arena<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-2 rounded-full border border-primary/60 py-1.5 pr-1.5 pl-5">
            <input
              type="text"
              placeholder="Buscar"
              className="w-32 bg-transparent text-[13px] text-foreground placeholder:text-primary/70 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Buscar"
              className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-muted md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-[1440px] px-6 md:hidden">
          <div className="rounded-3xl border border-border/60 bg-background/95 p-4 backdrop-blur-md">
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
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
