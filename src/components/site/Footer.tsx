const footerLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#solucoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-8 pt-16 sm:px-12">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-background/10 pb-8 md:flex-row md:items-center">
          <div className="text-[1.6rem] font-extrabold tracking-tight">
            Arena<span className="text-primary">.</span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[14px] text-background/70 transition-colors hover:text-background"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Big brand mark */}
        <div className="py-16 md:py-20">
          <div className="font-display text-[22vw] font-semibold uppercase leading-[0.85] tracking-[-0.04em] text-background/10 md:text-[18vw]">
            arena
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-background/10 py-6 text-[12.5px] text-background/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Arena — Todos os direitos reservados.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-background">Privacidade</a>
            <a href="#" className="hover:text-background">Termos</a>
            <a href="mailto:contato@arena.com" className="hover:text-background">contato@arena.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
