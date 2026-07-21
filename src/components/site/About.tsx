export function About() {
  return (
    <section id="sobre" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: heading + copy */}
          <div className="flex flex-col">
            <div className="mb-6 inline-flex items-center gap-2 text-[13px] text-foreground/70">
              <span className="h-1 w-1 rounded-full bg-foreground/70" />
              sobre nós
            </div>

            <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[60px]">
              feita para clínicas,
              <br />
              movida por ia.
            </h2>

            <p className="mt-8 max-w-[440px] text-[15px] leading-[1.7] text-foreground/70">
              A Arena nasceu para resolver o gargalo que trava o crescimento
              das clínicas: o atendimento. Combinamos inteligência artificial
              com fluxos desenhados por especialistas em saúde para transformar
              cada conversa no WhatsApp em uma consulta agendada.
            </p>

            <div className="mt-10 max-w-[380px] rounded-xl bg-surface p-6">
              <p className="text-[14px] font-medium text-foreground">
                Não somos mais uma ferramenta genérica.
              </p>
              <p className="mt-2 text-[13px] leading-[1.6] text-foreground/70">
                Somos uma secretária virtual treinada para o dia a dia clínico
                — do primeiro contato ao lembrete de retorno.
              </p>
            </div>
          </div>

          {/* Right: stats card block */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-surface p-8">
                <div className="text-[44px] font-semibold leading-none tracking-tight text-foreground sm:text-[52px]">
                  +1000<span className="text-primary">+</span>
                </div>
                <div className="mt-3 text-[13px] text-foreground/70">
                  clínicas atendidas
                </div>
              </div>
              <div className="rounded-xl bg-surface p-8">
                <div className="text-[44px] font-semibold leading-none tracking-tight text-foreground sm:text-[52px]">
                  93<span className="text-primary">%</span>
                </div>
                <div className="mt-3 text-[13px] text-foreground/70">
                  das mensagens viram consulta
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-foreground p-8 text-background">
              <div className="text-[13px] text-background/60">24h por dia</div>
              <div className="mt-3 text-[26px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[30px]">
                Atendimento que
                <br />
                nunca para. Nem em
                <br />
                feriado, nem de
                <br />
                madrugada.
              </div>
              <button
                type="button"
                className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver como funciona
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
