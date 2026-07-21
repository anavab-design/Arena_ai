import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {/* Left testimonial */}
          <article className="flex flex-col justify-between rounded-2xl bg-surface p-8">
            <div>
              <Quote className="h-6 w-6 text-primary" strokeWidth={2} />
              <p className="mt-6 text-[15px] leading-[1.65] text-foreground">
                “A agenda encheu sem eu contratar mais ninguém. A Arena
                responde no minuto e o paciente já sai com horário marcado.”
              </p>
            </div>
            <div className="mt-8">
              <div className="text-[13.5px] font-semibold text-foreground">
                Dra. Marina Costa
              </div>
              <div className="text-[12.5px] text-foreground/60">
                Clínica Odontológica
              </div>
            </div>
          </article>

          {/* Center card */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface p-8">
            <div className="mb-8 inline-flex items-center gap-2 text-[13px] text-foreground/70">
              <span className="h-1 w-1 rounded-full bg-foreground/70" />
              depoimentos
            </div>
            <div>
              <h2 className="font-display text-[36px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[44px]">
                prova de
                <br />
                simplicidade.
              </h2>
              <button
                type="button"
                className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver todos os cases
              </button>
            </div>
          </div>

          {/* Right testimonial */}
          <article className="flex flex-col justify-between rounded-2xl bg-surface p-8">
            <div>
              <Quote className="h-6 w-6 text-primary" strokeWidth={2} />
              <p className="mt-6 text-[15px] leading-[1.65] text-foreground">
                “Reduzimos faltas em quase 40% no primeiro mês. Os lembretes
                da Arena fazem sozinhos o que a secretária levava horas.”
              </p>
            </div>
            <div className="mt-8">
              <div className="text-[13.5px] font-semibold text-foreground">
                Dr. Rafael Menezes
              </div>
              <div className="text-[12.5px] text-foreground/60">
                Consultório Médico
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
