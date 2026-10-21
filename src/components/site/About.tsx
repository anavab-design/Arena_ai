import { ArrowRight } from "lucide-react";
import visaoGeral from "@/assets/sistema-visao-geral.webp";

export function About() {
  return (
    <section id="sobre" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <div className="flex flex-col">
            <div className="mb-6 inline-flex items-center gap-2 text-[13px] text-foreground/70">
              <span className="h-1 w-1 rounded-full bg-foreground/70" />
              Sobre nós.
            </div>

            <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[60px]">
              Feita para clínicas,
              <br />
              movida por IA.
            </h2>

            <p className="mt-8 max-w-[440px] text-[15px] leading-[1.7] text-foreground/70">
              Acreditamos que a tecnologia deve simplificar. A Arena combina IA
              com fluxos desenhados por especialistas em saúde para transformar
              cada conversa no WhatsApp em uma consulta agendada.
            </p>
          </div>

          {/* Right column — big image placeholder */}
          <div className="h-[420px] overflow-hidden rounded-xl bg-surface md:h-[460px]">
            <img
              src={visaoGeral}
              alt="Visão geral da Arena com leads, agendamentos, comparecimento e faturamento da clínica"
              className="h-full w-full object-cover object-left-top"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom row — quote card + stats + CTA (overlapping the image above) */}
        <div className="relative mt-10 grid grid-cols-1 gap-8 md:mt-[-90px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-end md:gap-12">
          {/* Quote card */}
          <div className="rounded-xl bg-surface p-8 md:max-w-[420px]">
            <h3 className="font-display text-[28px] font-medium leading-[1.15] tracking-tight text-foreground sm:text-[32px]">
              Não somos mais uma
              <br />
              ferramenta genérica
            </h3>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-foreground/70">
              Somos uma secretária virtual treinada para o dia a dia clínico —
              do primeiro contato ao lembrete de retorno.
            </p>
          </div>

          {/* Stats + button */}
          <div className="flex flex-col gap-8 md:pb-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-[44px] font-medium leading-none tracking-tight text-foreground sm:text-[56px]">
                  +1000<span className="text-primary">+</span>
                </div>
                <div className="mt-3 text-[13px] text-foreground/70">
                  clínicas atendidas
                </div>
              </div>
              <div>
                <div className="text-[44px] font-medium leading-none tracking-tight text-foreground sm:text-[56px]">
                  93<span className="text-primary">%</span>
                </div>
                <div className="mt-3 text-[13px] text-foreground/70">
                  mensagens viram consulta
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 self-end rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver mais
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
