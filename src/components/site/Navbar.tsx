export function Navbar() {
  const links = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#solucoes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8 sm:px-12">
        <a
          href="#home"
          className="font-display text-[18px] font-semibold tracking-tight text-foreground"
        >
          arena
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-colors hover:bg-primary/90"
        >
          Fale com a Arena
        </a>
      </div>
    </header>
  );
}
