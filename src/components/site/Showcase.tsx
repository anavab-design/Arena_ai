import fotoOdontologia from "@/assets/fotos/odontologia.webp";
import fotoConsultorio from "@/assets/fotos/consultorio.webp";
import fotoEstetica from "@/assets/fotos/estetica.webp";

// image é opcional: sem foto, o card fica no fundo escuro de antes.
const cases: { title: string; subtitle: string; image?: string }[] = [
  {
    title: "Clínica Odontológica",
    subtitle: "3x mais agendamentos no WhatsApp",
    image: fotoOdontologia,
  },
  {
    title: "Consultório Médico",
    subtitle: "Zero mensagens sem resposta",
    image: fotoConsultorio,
  },
  {
    title: "Rede de Estética",
    subtitle: "Painel único para 6 unidades",
    image: fotoEstetica,
  },
];

export function Showcase() {
  return (
    <section id="cases" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[13px] text-background/60">
              <span className="h-1 w-1 rounded-full bg-background/60" />
              Arena em ação
            </div>
            <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[52px] md:text-[60px]">
              Simplicidade em ação
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-background/70 md:justify-self-end">
            Clínicas de diferentes especialidades usando a Arena para atender
            melhor e crescer sem contratar mais gente.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-xl bg-background/[0.06] p-7 transition-colors hover:bg-background/[0.09] md:min-h-[440px]"
            >
              {c.image && (
                <>
                  <img
                    src={c.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-foreground/10" />
                </>
              )}
              <div className="relative grid h-9 w-9 place-items-center rounded-full border border-background/30 text-background/80">
                <span className="text-[14px]">↗</span>
              </div>
              <div className="relative">
                <h3 className="text-[22px] font-semibold leading-tight tracking-tight sm:text-[24px]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-background/60">
                  {c.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
