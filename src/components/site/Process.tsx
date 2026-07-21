import { ArrowUpRight } from "lucide-react";

export function Process() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[13px] text-foreground/70">
              <span className="h-1 w-1 rounded-full bg-foreground/70" />
              como funciona
            </div>
            <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[60px]">
              processo simples
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-foreground/70 md:justify-self-end">
            Em poucos dias sua clínica já está com a secretária virtual ativa,
            integrada à sua agenda e respondendo pacientes.
          </p>
        </div>

        {/* Cards row */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_minmax(0,0.9fr)]">
          {/* Step 1 */}
          <article className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-surface p-7 md:min-h-[380px]">
            <div className="text-[13px] text-foreground/60">01</div>
            <div>
              <h3 className="text-[20px] font-semibold leading-tight tracking-tight text-foreground">
                Diagnóstico
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-foreground/70">
                Entendemos o fluxo da sua clínica e mapeamos as dúvidas mais
                comuns dos pacientes.
              </p>
            </div>
          </article>

          {/* Step 2 — highlighted */}
          <article className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-7 text-background md:min-h-[380px]">
            <div className="flex items-start justify-between">
              <div className="text-[13px] text-background/60">02</div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </span>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold leading-tight tracking-tight sm:text-[28px]">
                Implantação e integração
              </h3>
              <p className="mt-3 max-w-[380px] text-[14px] leading-[1.65] text-background/70">
                Conectamos a Arena ao WhatsApp e ao seu sistema de agenda.
                Sem trocar de ferramenta, sem interromper o atendimento.
              </p>
            </div>
          </article>

          {/* Step 3 */}
          <article className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-surface p-7 md:min-h-[380px]">
            <div className="text-[13px] text-foreground/60">03</div>
            <div>
              <h3 className="text-[20px] font-semibold leading-tight tracking-tight text-foreground">
                Operação e suporte
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-foreground/70">
                A Arena entra em produção e nosso time acompanha resultados
                para melhorar semana a semana.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
