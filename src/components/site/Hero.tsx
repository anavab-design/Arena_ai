import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 pt-16 pb-24 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16 md:pt-24 md:pb-32 lg:pt-28 lg:pb-40">
        {/* Left visual placeholder */}
        <div className="order-2 h-[320px] rounded-[28px] bg-surface md:order-1 md:h-[560px]" />

        {/* Right column: hero text */}
        <div className="order-1 flex flex-col items-center text-center md:order-2 md:justify-center md:pt-6">
          <div className="mb-8 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Secretária Virtual com IA
          </div>

          <h1 className="font-display text-[46px] font-semibold uppercase leading-[0.95] tracking-[-0.025em] text-foreground sm:text-[64px] md:text-[72px] lg:text-[84px]">
            Atendimento
            <br />
            que agenda
            <br />
            sozinho
          </h1>

          <p className="mt-8 max-w-[420px] text-[15px] leading-[1.65] text-muted-foreground">
            Clínicas perdem pacientes todos os dias porque o atendimento no WhatsApp demora.
            A Arena automatiza esse atendimento, agenda consultas e responde 24 horas por dia.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#funcionalidades"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver como funciona
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-full px-6 py-3.5 text-[13px] font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Diagnóstico gratuito
            </a>
          </div>

          <div className="mt-16 flex w-full max-w-[460px] flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-left">
            <div>
              <div className="text-[36px] font-semibold leading-none tracking-tight text-foreground">
                +1000<span className="text-primary">.</span>
              </div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Clínicas atendidas
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-background bg-foreground" />
                <span className="h-8 w-8 rounded-full border-2 border-background bg-surface" />
                <span className="h-8 w-8 rounded-full border-2 border-background bg-primary" />
              </div>
              <p className="max-w-[200px] text-[11.5px] leading-snug text-muted-foreground">
                Mensagens viram agendamentos, 24h por dia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-8 sm:px-8">
          {["Odontológicas", "Médicas", "Estética", "Veterinária", "Psicologia", "Fisioterapia"].map(
            (label) => (
              <span key={label} className="text-[12.5px] font-medium tracking-wide text-muted-foreground/70">
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
