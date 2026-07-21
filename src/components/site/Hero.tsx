import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-4 pt-10 pb-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24">
        {/* Left visual placeholder — mirrors the large gray block in the NeaTech ref */}
        <div className="order-2 h-[280px] rounded-3xl bg-surface md:order-1 md:h-[520px]" />

        {/* Right column: hero text */}
        <div className="order-1 flex flex-col items-center text-center md:order-2 md:justify-center md:pt-10">
          <div className="mb-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Secretária Virtual com IA
          </div>

          <h1 className="font-display text-[44px] font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-foreground sm:text-[60px] md:text-[68px] lg:text-[76px]">
            Atendimento
            <br />
            que agenda
            <br />
            sozinho
          </h1>

          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-muted-foreground">
            Clínicas perdem pacientes todos os dias porque o atendimento no WhatsApp demora. A Arena
            automatiza esse atendimento, agenda consultas e responde 24 horas por dia, integrada ao
            sistema de gestão da sua clínica.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#funcionalidades"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-[13.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver como funciona
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-[13.5px] font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Diagnóstico gratuito
            </a>
          </div>

          <div className="mt-10 flex w-full max-w-[480px] flex-col items-center gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:text-left">
            <div>
              <div className="text-[34px] font-semibold leading-none text-foreground">
                +1000<span className="text-primary">.</span>
              </div>
              <div className="mt-1.5 text-[11.5px] font-medium uppercase tracking-wider text-muted-foreground">
                Clínicas atendidas
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-background bg-foreground" />
                <span className="h-8 w-8 rounded-full border-2 border-background bg-surface" />
                <span className="h-8 w-8 rounded-full border-2 border-background bg-primary" />
              </div>
              <p className="max-w-[220px] text-[11.5px] leading-snug text-muted-foreground">
                Convertemos mensagens em agendamentos, 24h por dia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-y border-border/60 bg-muted/60">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 sm:px-6">
          {["Odontológicas", "Médicas", "Estética", "Veterinária", "Psicologia", "Fisioterapia"].map(
            (label) => (
              <span key={label} className="text-[13px] font-medium text-muted-foreground/80">
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
