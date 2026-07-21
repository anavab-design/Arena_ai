const services = [
  {
    n: "01",
    title: "Atendimento no WhatsApp",
    tags: ["24h", "IA treinada", "Multi-canal"],
    description:
      "Responde pacientes em segundos, entende contexto e conduz a conversa até o agendamento.",
  },
  {
    n: "02",
    title: "Agendamento Automático",
    tags: ["Agenda integrada", "Confirmação"],
    description:
      "Consulta a agenda em tempo real, oferece horários e confirma direto com o paciente.",
  },
  {
    n: "03",
    title: "Lembretes e Confirmação",
    tags: ["Reduz faltas", "Automático"],
    description:
      "Lembretes automáticos e confirmação um dia antes — sua agenda cheia e sem no-show.",
    highlighted: true,
  },
  {
    n: "04",
    title: "Relatórios e Insights",
    tags: ["Painel", "Métricas"],
    description:
      "Acompanhe conversas, conversão e horários de pico direto no painel da clínica.",
  },
];

export function Services() {
  return (
    <section id="solucoes" className="relative bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[13px] text-foreground/60">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Nossos serviços
          </div>

          <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[64px]">
            O que a Arena resolve
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-foreground/70">
            Uma solução completa para transformar o WhatsApp da sua clínica em
            um canal que agenda, confirma e fideliza — sem esforço.
          </p>
        </div>

        {/* Numbered cards row (Pemogan-style) */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ n, title, tags, description, highlighted }) => (
            <article
              key={n}
              className={`relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-colors ${
                highlighted
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-white/10 bg-card/40 text-foreground hover:border-white/20"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  className={`text-[18px] font-semibold leading-tight tracking-tight ${
                    highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {title}
                </h3>
                <span
                  className={`font-display text-[38px] font-medium leading-none tracking-tight ${
                    highlighted
                      ? "text-primary-foreground/40"
                      : "text-foreground/25"
                  }`}
                >
                  {n}
                </span>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                        highlighted
                          ? "border-primary-foreground/25 text-primary-foreground"
                          : "border-white/10 text-foreground/70"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p
                  className={`text-[13px] leading-[1.6] ${
                    highlighted
                      ? "text-primary-foreground/85"
                      : "text-foreground/65"
                  }`}
                >
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
