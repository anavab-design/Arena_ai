import heroDashboard from "@/assets/arena-dashboard.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient blue glow — Pemogan style, blue instead of orange */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--primary) 40%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--primary) 45%, transparent)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-8 pt-14 pb-24 sm:px-12 md:pt-20 md:pb-32">
        {/* Headline top */}
        <h1 className="mx-auto text-center font-display text-[56px] font-medium leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[88px] md:text-[116px] lg:text-[128px]">
          Sua clínica,
        </h1>

        {/* Center visual with floating cards */}
        <div className="relative mx-auto mt-6 max-w-[900px]">
          <img
            src={heroDashboard.url}
            alt="Painel Arena — dashboard de atendimento no WhatsApp"
            className="mx-auto h-auto w-full max-w-[820px] object-contain drop-shadow-[0_40px_60px_rgba(34,135,216,0.25)]"
            loading="eager"
          />

          {/* Floating info card top-left */}
          <div className="absolute left-2 top-6 hidden max-w-[220px] rounded-2xl border border-white/10 bg-card/80 p-5 text-left backdrop-blur-md md:block">
            <p className="text-[12px] leading-[1.55] text-foreground/70">
              Atende no WhatsApp
              <br />
              <span className="text-foreground">24h por dia</span>, sem pausa.
            </p>
          </div>

          {/* Floating stat card top-right */}
          <div className="absolute right-2 top-6 hidden items-center gap-4 rounded-2xl border border-white/10 bg-card/80 px-5 py-4 text-left backdrop-blur-md md:flex">
            <div className="text-[28px] font-medium leading-none tracking-tight text-foreground">
              +1000<span className="text-primary">+</span>
            </div>
            <div className="max-w-[110px] text-[11.5px] leading-tight text-foreground/70">
              clínicas
              <br />
              atendendo com IA
            </div>
          </div>

          {/* CTA pill bottom-left */}
          <div className="absolute bottom-8 left-2 hidden max-w-[220px] rounded-2xl border border-white/10 bg-card/80 p-5 text-left backdrop-blur-md md:block">
            <p className="mb-3 text-[12px] leading-[1.55] text-foreground/70">
              Mensagens viram
              <br />
              agendamentos em segundos.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Começar agora
            </a>
          </div>
        </div>

        {/* Headline bottom */}
        <h1 className="mx-auto -mt-2 text-center font-display text-[56px] font-medium leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[88px] md:text-[116px] lg:text-[128px]">
          no piloto automático.
        </h1>

        {/* CTA row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Começar agora
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Como funciona
          </a>
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-y border-white/5 bg-card/40">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-12 gap-y-6 px-8 py-8 sm:px-12">
          {["OdontoPlus", "iClinic", "VitalCare", "Altura", "Aptiv", "Innoalve"].map((label) => (
            <span
              key={label}
              className="text-[15px] font-semibold uppercase tracking-wide text-foreground/30"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
