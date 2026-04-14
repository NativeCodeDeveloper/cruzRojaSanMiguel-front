"use client";

import RevealOnScroll from "@/Componentes/RevealOnScroll";
import { Phone, Clock, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Atención Clínica Integral",
    text: "Diagnóstico y tratamiento de afecciones del pie: callosidades, uñas encarnadas, onicomicosis y más.",
  },
  {
    title: "Seguridad Hospitalaria",
    text: "Trabajamos con estándares de esterilización y protocolos rigurosos de la Cruz Roja.",
  },
  {
    title: "Cuidado de Pie Diabético",
    text: "Atención preventiva especializada para pacientes crónicos, evitando complicaciones graves.",
  },
  {
    title: "Confianza Institucional",
    text: "El respaldo de la Cruz Roja garantiza una atención profesional, ética y cercana.",
  },
];

const profesionales = [
  {
    nombre: "Paula Arce",
    rol: "Podóloga Clínica",
    foto: "/paulaarce.jpg",
    telefono: "+56 9 8213 2679",
    whatsapp: "https://wa.me/56982132679",
    email: "paulapodologia@gmail.com",
    horario: "Sábados 09:00 – 13:40",
    bloque: "Bloques de 40 min",
    exp: "Especialista en cirugía menor podológica y pie diabético."
  },
  {
    nombre: "Miriam Ponce",
    rol: "Podóloga Clínica",
    foto: "/miriamponce.jpg",
    telefono: "+56 9 7411 2871",
    whatsapp: "https://wa.me/56974112871",
    email: "miriampr.podologia@gmail.com",
    horario: "Mar y Mié 14:30 – 17:30",
    bloque: "Bloques de 30 min",
    exp: "Experta en onicomicosis y tratamientos terapéuticos preventivos."
  },
];

export default function Seccion1Clinical() {
  return (
    <div className="overflow-hidden bg-[#F6F2ED]">
      
      {/* ─── Sección Pilares de Valor (Institutional Blue/Cream) ─── */}
      <section id="porque-elegirnos" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          
          <div className="text-center mb-16">
            <RevealOnScroll>
              <p className="eyebrow mb-4 text-[#B01824]">Excelencia Clinica</p>
              <h2 className="text-editorial-title text-[#1A1A1A]">Por que confiar en nosotros</h2>
              <p className="mt-6 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-[#5F6772]">
                Salud podal con el rigor clínico y la ética profesional que certifica la Cruz Roja San Miguel.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => {
              return (
                <RevealOnScroll key={item.title}>
                  <article className="group h-full rounded-[1.6rem] border border-[#E4D9DA] bg-white p-8 text-center transition-all hover:border-[#C9B4B7] hover:shadow-[0_24px_56px_-42px_rgba(26,26,26,0.28)]">
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F6F2ED] p-4 transition-transform group-hover:scale-105">
                      <img src="/logosf1.png" className="h-full w-full object-contain" alt="Cruz Roja Logo" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold tracking-tight text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#5F6772]">{item.text}</p>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Sección Equipo Profesional (Compact Editorial) ─── */}
      <section id="equipo" className="scroll-mt-24 rounded-t-[3rem] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          
          <div className="text-center mb-16">
            <RevealOnScroll>
              <p className="eyebrow mb-4 text-[#B01824]">Nuestro Legado</p>
              <h2 className="text-editorial-title text-[#1A1A1A]">Equipo de Especialistas</h2>
              <p className="mt-4 text-sm sm:text-base text-[#5F6772]">Enfoque humano y técnico para tu bienestar integral.</p>
            </RevealOnScroll>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:max-w-5xl lg:mx-auto">
            {profesionales.map((prof) => (
              <RevealOnScroll key={prof.nombre}>
                <article className="flex flex-col group h-full">
                  
                  {/* Container slightly downsized */}
                  <div className="relative mb-8 aspect-[5/6] overflow-hidden rounded-[2rem] border-[10px] border-[#F6F2ED] bg-[#FBF9F7] shadow-[0_20px_40px_-34px_rgba(26,26,26,0.3)]">
                    <img
                      src={prof.foto}
                      alt={prof.nombre}
                      className="h-full w-full object-contain object-top pt-8 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="px-2">
                    <h3 className="mb-2 text-editorial-title text-3xl text-[#1A1A1A]">{prof.nombre}</h3>
                    <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.26em] text-[#CC1A2B]">
                      {prof.rol}
                    </p>

                    <p className="mb-10 min-h-[42px] text-sm font-medium leading-relaxed text-[#5F6772]">
                      {prof.exp}
                    </p>

                    <div className="mb-10 grid gap-8 border-t border-[#F0E8E8] pt-10">
                      <div className="flex items-center gap-5">
                        <Clock className="h-5 w-5 text-[#CC1A2B]" />
                        <div>
                          <p className="text-[11px] font-black uppercase text-[#1A1A1A]/40 mb-1">Disponibilidad</p>
                          <p className="text-sm font-bold text-[#1A1A1A]">{prof.horario}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-5">
                        <Phone className="h-5 w-5 text-[#CC1A2B]" />
                        <div>
                          <p className="text-[11px] font-black uppercase text-[#1A1A1A]/40 mb-1">WhatsApp</p>
                          <p className="text-sm font-bold text-[#1A1A1A]">{prof.telefono}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={prof.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center justify-center rounded-full bg-[#B01824] px-10 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#8F101E]"
                    >
                      Agendar Hora
                      <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
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
