import { ArrowLeft, ArrowRight } from "lucide-react";

export function Process() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="md:justify-self-end md:text-right">
            <div className="inline-flex items-center gap-2 text-[13px] text-foreground/70">
              <span className="h-1 w-1 rounded-full bg-foreground/70" />
              como funciona
            </div>
          </div>
          <div>
            <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[60px]">
              processo simples
            </h2>
          </div>
          <p className="max-w-[300px] text-[14px] leading-[1.65] text-foreground/70">
            A tecnologia deve ser simples. Nosso processo torna tudo mais fácil,
            da conversa até o lançamento.
          </p>
        </div>

        {/* Cards row — asymmetric */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)_minmax(0,1fr)] md:items-start">
          {/* Step 1 — image top, title bottom */}
          <article className="flex flex-col rounded-xl border border-border/70 bg-background p-4 pb-8">
            <div className="h-[200px] w-full rounded-lg bg-surface" />
            <h3 className="mt-8 px-3 text-[22px] font-medium leading-tight tracking-tight text-foreground">
              Diagnóstico
            </h3>
          </article>

          {/* Step 2 — wide highlighted, image left + text right with divider */}
          <article className="flex flex-col gap-6 rounded-xl bg-surface p-4 md:flex-row md:gap-8 md:p-6">
            <div className="h-[240px] w-full shrink-0 rounded-lg bg-foreground/10 md:h-auto md:w-[46%] md:min-h-[320px]" />
            <div className="flex flex-col justify-center md:flex-1 md:pr-4">
              <h3 className="text-[28px] font-medium leading-tight tracking-tight text-foreground sm:text-[32px]">
                Implantação e integração
              </h3>
              <div className="mt-5 h-px w-full bg-foreground/15" />
              <p className="mt-6 text-[15px] leading-[1.65] text-foreground/70">
                Conectamos a Arena ao WhatsApp e ao seu sistema de agenda —
                integrações confiáveis, sem trocar de ferramenta, sem
                interromper o atendimento.
              </p>
            </div>
          </article>

          {/* Step 3 — offset lower, image top, title bottom */}
          <article className="mt-6 flex flex-col rounded-xl border border-border/70 bg-background p-4 pb-8 md:mt-20">
            <div className="h-[200px] w-full rounded-lg bg-surface" />
            <h3 className="mt-8 px-3 text-[22px] font-medium leading-tight tracking-tight text-foreground">
              Operação e suporte
            </h3>
          </article>
        </div>

        {/* Nav arrows */}
        <div className="mt-10 flex items-center justify-center gap-4 md:justify-start md:pl-[8%]">
          <button
            type="button"
            aria-label="Anterior"
            className="grid h-12 w-12 place-items-center rounded-full border border-primary text-primary transition-colors hover:bg-primary/5"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
