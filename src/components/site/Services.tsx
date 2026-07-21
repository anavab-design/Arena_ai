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
            nossos serviços
          </div>

          <h2 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[60px]">
            o que a arena resolve
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-foreground/70">
            Uma solução completa para transformar o WhatsApp da sua clínica
            em um canal que agenda, confirma e fideliza — sem esforço.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-[20px] bg-surface p-7 transition-colors hover:bg-surface/70"
            >
              <div className="mb-14 flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>
              <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-foreground/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
