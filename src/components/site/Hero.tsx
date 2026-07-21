export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-8 pt-16 pb-20 sm:px-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 md:pt-20 md:pb-28">
        {/* Left visual placeholder */}
        <div className="order-2 h-[360px] rounded-[8px] bg-surface md:order-1 md:h-[720px]" />

        {/* Right column */}
        <div className="order-1 flex flex-col items-center text-center md:order-2 md:pt-6">
          <div className="mb-6 inline-flex items-center gap-2 text-[13px] font-normal text-foreground/70">
            <span className="h-1 w-1 rounded-full bg-foreground/70" />
            secretária virtual.
          </div>

          <h1 className="font-display text-[52px] font-normal uppercase leading-[0.98] tracking-[-0.02em] text-foreground sm:text-[76px] md:text-[92px] lg:text-[108px]">
            atendimento
            <br />
            que agenda
            <br />
            sozinho
          </h1>

          <p className="mt-10 max-w-[460px] text-[15px] leading-[1.65] text-foreground/70">
            A Arena automatiza o WhatsApp da sua clínica, agenda consultas e
            responde pacientes 24 horas por dia, sem depender de secretária.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#funcionalidades"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Começar agora
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-full border border-primary px-7 py-3.5 text-[14px] font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Saiba mais
            </a>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            <div className="text-left">
              <div className="text-[36px] font-semibold leading-none tracking-tight text-foreground">
                +1000<span className="text-primary">+</span>
              </div>
              <div className="mt-1.5 text-[13px] text-foreground/70">
                clínicas
              </div>
            </div>

            <div className="flex -space-x-3">
              <span className="h-11 w-11 rounded-full border-2 border-background bg-muted-foreground/25" />
              <span className="h-11 w-11 rounded-full border-2 border-background bg-muted-foreground/35" />
              <span className="h-11 w-11 rounded-full border-2 border-background bg-muted-foreground/50" />
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-background bg-foreground text-background text-[15px]">
                +
              </span>
            </div>

            <p className="max-w-[220px] text-left text-[13px] leading-snug text-foreground/70">
              Mensagens viram
              <br />
              agendamentos, 24h por dia.
            </p>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="bg-surface">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-12 gap-y-6 px-8 py-10 sm:px-12">
          {["OdontoPlus", "iClinic", "VitalCare", "Altura", "Aptiv", "Innoalve"].map((label) => (
            <span
              key={label}
              className="text-[18px] font-semibold uppercase tracking-wide text-foreground/25"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
