import { MessageCircle, CalendarCheck, Bell, BarChart3 } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Atendimento no WhatsApp",
    description:
      "Responde pacientes em segundos, entende contexto e conduz a conversa até o agendamento.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Automático",
    description:
      "Consulta a agenda em tempo real, oferece horários e confirma direto com o paciente.",
  },
  {
    icon: Bell,
    title: "Lembretes e Confirmação",
    description:
      "Reduz faltas com lembretes automáticos e confirmação um dia antes da consulta.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Insights",
    description:
      "Acompanhe conversas, conversão e horários de pico direto no painel da clínica.",
  },
];

export function Services() {
  return (
    <section id="solucoes" className="bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24 sm:px-12 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-[13px] text-foreground/70">
            <span className="h-1 w-1 rounded-full bg-foreground/70" />
            Nossos serviços
          </div>

          <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[60px]">
            O que a Arena resolve
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-foreground/70">
            Uma solução completa para transformar o WhatsApp da sua clínica
            em um canal que agenda, confirma e fideliza — sem esforço.
          </p>
        </div>

        {/* Alternating "tab" cards — icon protrudes above card top edge */}
        <div className="mt-24 grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`relative ${i % 2 === 1 ? "lg:mt-14" : ""}`}
            >
              {/* Icon tab */}
              <span className="absolute left-8 -top-6 z-10 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>

              <article className="flex min-h-[240px] flex-col rounded-xl bg-surface px-8 pt-14 pb-8">
                <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-4 text-[13.5px] leading-[1.65] text-foreground/70">
                  {description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
