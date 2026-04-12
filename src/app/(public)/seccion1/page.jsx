"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/Componentes/RevealOnScroll";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

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
    <div className="bg-[#FAF5F0] overflow-hidden">
      
      {/* ─── Sección Pilares de Valor (Institutional Blue/Cream) ─── */}
      <section id="porque-elegirnos" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          
          <div className="text-center mb-16">
            <RevealOnScroll>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#CC1A2B] mb-4">Excelencia Clínica</p>
              <h2 className="text-editorial-title text-4xl font-black text-[#1A1A1A] sm:text-5xl">¿Por qué confiar en nosotros?</h2>
              <p className="mt-6 mx-auto max-w-2xl text-[17px] leading-relaxed text-[#6B7280]">
                Salud podal con el rigor clínico y la ética profesional que certifica la Cruz Roja San Miguel.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => {
              return (
                <RevealOnScroll key={item.title}>
                  <article className="h-full rounded-[2.5rem] border border-[#E8D5D7] bg-white p-8 text-center transition-all hover:shadow-xl hover:border-[#CC1A2B]/20 group">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FAF5F0] mx-auto p-4 transition-transform group-hover:scale-105">
                      <img src="/logosf1.png" className="h-full w-full object-contain" alt="Cruz Roja Logo" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A] mb-4">{item.title}</h3>
                    <p className="text-base leading-relaxed text-[#6B7280]">{item.text}</p>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Sección Equipo Profesional (Compact Editorial) ─── */}
      <section id="equipo" className="scroll-mt-24 py-16 md:py-24 bg-white rounded-t-[5rem] shadow-[0_-30px_80px_-40px_rgba(204,26,43,0.1)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          
          <div className="text-center mb-16">
            <RevealOnScroll>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#CC1A2B] mb-4">Nuestro Legado</p>
              <h2 className="text-editorial-title text-5xl font-black text-[#1A1A1A] sm:text-6xl">Equipo de Especialistas</h2>
              <p className="mt-4 text-[18px] text-[#6B7280]">Enfoque humano y técnico para tu bienestar integral.</p>
            </RevealOnScroll>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:max-w-5xl lg:mx-auto">
            {profesionales.map((prof) => (
              <RevealOnScroll key={prof.nombre}>
                <article className="flex flex-col group h-full">
                  
                  {/* Container slightly downsized */}
                  <div className="relative aspect-[5/6] overflow-hidden rounded-[3.5rem] bg-[#FAF7F5] border-[12px] border-[#FAF5F0] shadow-lg mb-8">
                    <img
                      src={prof.foto}
                      alt={prof.nombre}
                      className="h-full w-full object-contain object-top pt-8 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="px-2">
                    <h3 className="text-editorial-title text-4xl font-bold text-[#1A1A1A] mb-2">{prof.nombre}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CC1A2B] mb-6">
                      {prof.rol}
                    </p>

                    <p className="text-base font-medium text-[#6B7280] leading-relaxed mb-10 min-h-[42px]">
                      {prof.exp}
                    </p>

                    <div className="grid gap-8 mb-10 border-t border-[#FAF5F0] pt-10">
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
                      className="inline-flex items-center justify-center rounded-full bg-[#CC1A2B] px-12 py-5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#9E1020] hover:shadow-2xl hover:scale-105 group/link"
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
