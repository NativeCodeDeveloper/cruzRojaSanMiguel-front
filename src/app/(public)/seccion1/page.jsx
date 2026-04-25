"use client";

import Link from "next/link";
import RevealOnScroll from "@/Componentes/RevealOnScroll";
import { Phone, Clock, ArrowRight, Stethoscope, ShieldCheck, HeartPulse, BadgeCheck } from "lucide-react";

const pillars = [
  {
    title: "Atención Clínica Integral",
    text: "Diagnóstico y tratamiento de afecciones del pie: callosidades, uñas encarnadas, onicomicosis y más.",
    Icon: Stethoscope,
  },
  {
    title: "Seguridad Hospitalaria",
    text: "Trabajamos con estándares de esterilización y protocolos rigurosos de la Cruz Roja.",
    Icon: ShieldCheck,
  },
  {
    title: "Cuidado de Pie Diabético",
    text: "Atención preventiva especializada para pacientes crónicos, evitando complicaciones graves.",
    Icon: HeartPulse,
  },
  {
    title: "Confianza Institucional",
    text: "El respaldo de la Cruz Roja garantiza una atención profesional, ética y cercana.",
    Icon: BadgeCheck,
  },
];

const profesionales = [
  {
    nombre: "Paula Arce",
    rol: "Podóloga Clínica",
    foto: "/paulaarce.jpg",
    telefono: "+56 9 8213 2679",
    whatsapp: "https://wa.me/56982132679",
    horario: "Sábados 09:00 – 13:40",
    exp: "Especialista en cirugía menor de uñas encarnadas.",
  },
  {
    nombre: "Miriam Ponce",
    rol: "Podóloga Clínica",
    foto: "/miriamponce.jpg",
    telefono: "+56 9 7411 2871",
    whatsapp: "https://wa.me/56974112871",
    horario: "Mar y Mié 14:30 – 17:30",
    exp: "Especialista en cirugía menor de uñas encarnadas.",
  },
];

export default function Seccion1Clinical() {
  return (
    <div className="overflow-hidden bg-[#F6F2ED]">

      {/* ─── Pilares de Valor ─── */}
      <section id="porque-elegirnos" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">

          <div className="text-center mb-16">
            <RevealOnScroll>
              <p className="eyebrow mb-4 text-[#B01824]">Excelencia Clínica</p>
              <h2 className="text-editorial-title text-[#1A1A1A]">Por qué confiar en nosotros</h2>
              <p className="mt-6 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-[#5F6772]">
                Salud podal con el rigor clínico y la ética profesional que certifica la Cruz Roja San Miguel.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => {
              const Icon = item.Icon;
              return (
                <RevealOnScroll key={item.title}>
                  <article className="group h-full rounded-[1.6rem] border border-[#E4D9DA] bg-white p-8 text-center transition-all hover:border-[#C9B4B7] hover:shadow-[0_24px_56px_-42px_rgba(26,26,26,0.28)]">
                    <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#B01824] transition-transform group-hover:scale-105">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-3 text-base font-bold tracking-tight text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#5F6772]">{item.text}</p>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Equipo Profesional ─── */}
      <section id="equipo" className="scroll-mt-24 rounded-t-[3rem] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-10">

          {/* Header */}
          <div className="text-center mb-14">
            <RevealOnScroll>
              <p className="eyebrow mb-3 text-[#B01824]">Nuestro Equipo</p>
              <h2 className="text-editorial-title text-[#1A1A1A]">Especialistas Certificadas</h2>
              <p className="mt-3 text-sm text-[#5F6772]">
                Profesionales dedicadas al cuidado integral de la salud de tus pies.
              </p>
            </RevealOnScroll>
          </div>

          {/* Cards — mismo tamaño fijo garantizado */}
          <div className="grid gap-5 sm:grid-cols-2">
            {profesionales.map((prof) => (
              <RevealOnScroll key={prof.nombre}>
                <article className="group flex flex-col h-full rounded-2xl border border-[#ECDCDC] bg-[#FDFAF9] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(176,24,36,0.18)] hover:border-[#D4AAAE]">

                  {/* Foto — proporción fija */}
                  <div className="relative w-full aspect-[4/3] bg-[#F6F2ED] overflow-hidden">
                    <img
                      src={prof.foto}
                      alt={prof.nombre}
                      className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Gradiente inferior suave */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FDFAF9]/80 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Nombre + rol */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">{prof.nombre}</h3>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#CC1A2B]">{prof.rol}</p>
                    </div>

                    {/* Descripción */}
                    <p className="text-[13px] leading-relaxed text-[#6B7280] flex-1 mb-5">
                      {prof.exp}
                    </p>

                    {/* Datos de contacto */}
                    <div className="flex flex-col gap-2 border-t border-[#F0E8E8] pt-4 mb-5">
                      <div className="flex items-center gap-2.5">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-[#CC1A2B]" />
                        <span className="text-[12px] font-medium text-[#1A1A1A]">{prof.horario}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="h-3.5 w-3.5 shrink-0 text-[#CC1A2B]" />
                        <span className="text-[12px] font-medium text-[#1A1A1A]">{prof.telefono}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/agendaProfesionales"
                      className="group/link inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-[#B01824]"
                    >
                      Agendar Hora
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>

                </article>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
