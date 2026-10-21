import { ArrowRight, ArrowUpRight } from "lucide-react";
import fotoAtendimento from "@/assets/fotos/atendimento.webp";

export function Benefits() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-5">
          <div className="flex flex-col justify-between md:col-span-4">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 text-[13px] text-foreground/70">
                <span className="h-1 w-1 rounded-full bg-foreground/70" />
                Por que Arena
              </div>
              <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[48px] md:text-[52px]">
                Simplicidade
                <br />
                que converte.
              </h2>
              <p className="mt-6 max-w-[340px] text-[14.5px] leading-[1.7] text-foreground/70">
                Menos fricção no atendimento, mais consultas na agenda.
                A Arena trabalha em silêncio para a clínica render mais.
              </p>
            </div>

            <button
              type="button"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Falar com especialista
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </div>

          <article className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-xl bg-foreground p-7 text-background md:col-span-5 md:min-h-[440px]">
            <img
              src={fotoAtendimento}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
            <div className="relative flex items-start justify-between">
              <div className="text-[13px] text-background/60">01</div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </span>
            </div>
            <div className="relative">
              <h3 className="text-[26px] font-semibold leading-tight tracking-tight sm:text-[32px]">
                Resposta em
                <br />
                segundos, 24/7
              </h3>
              <p className="mt-3 max-w-[360px] text-[14px] leading-[1.65] text-background/70">
                Nenhum paciente fica esperando. A Arena atende no primeiro
                minuto e conduz até o agendamento.
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-5 md:col-span-3">
            <article className="flex flex-1 flex-col justify-between rounded-xl bg-surface p-7">
              <div className="text-[13px] text-foreground/60">02</div>
              <div>
                <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-foreground">
                  Integra com sua agenda
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-foreground/70">
                  Compatível com os principais sistemas do mercado.
                </p>
              </div>
            </article>
            <article className="flex flex-1 flex-col justify-between rounded-xl bg-surface p-7">
              <div className="text-[13px] text-foreground/60">03</div>
              <div>
                <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-foreground">
                  Reduz faltas de pacientes
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-foreground/70">
                  Lembretes e confirmação automáticos antes da consulta.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
