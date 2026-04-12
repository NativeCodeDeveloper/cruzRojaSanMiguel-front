"use client";

import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ArrowRight } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

export default function ContactoClinical() {
  return (
    <main className="bg-[#FAF5F0] text-[#1A1A1A]">
      <section className="relative overflow-hidden py-20 md:py-28">
        
        {/* Soft Clinical Background Shape */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[40vw] w-[40vw] organic-shape bg-[#CC1A2B]/5 blur-3xl opacity-30 select-none" />

        <div className="relative mx-auto w-full max-w-5xl px-6 md:px-10">
          
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#CC1A2B] mb-8 block">Atención Profesional</span>
              <h1 className="text-editorial-title text-5xl font-black text-[#1A1A1A] sm:text-7xl">
                Canales de <span className="text-[#CC1A2B]">Contacto</span>.
              </h1>
              <p className="mt-8 mx-auto max-w-xl text-[18px] leading-relaxed text-[#6B7280]">
                Coordinación directa para una atención podológica de excelencia en San Miguel.
              </p>
            </div>
          </RevealOnScroll>

          {/* Tarjetas de Contacto Compactas y Clínicas */}
          <div className="grid gap-8">
            
            {/* Paula Arce */}
            <RevealOnScroll>
              <div className="group rounded-[3rem] border border-[#E8D5D7] bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div>
                    <h2 className="text-editorial-title text-5xl font-black text-[#1A1A1A]">Paula Arce</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CC1A2B] mt-4 mb-8">Podóloga Clínica</p>
                    
                    <div className="flex items-center gap-5 py-4 px-6 rounded-2xl border border-[#CC1A2B]/10 bg-[#FAF5F0] w-fit">
                      <Clock3 className="h-5 w-5 text-[#CC1A2B]" />
                      <span className="text-sm font-bold text-[#1A1A1A]">Sábados 09:00 – 13:40</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-1/2">
                    <a href="https://wa.me/56982132679" target="_blank" rel="noreferrer" 
                      className="flex items-center justify-center gap-4 rounded-full bg-[#CC1A2B] px-12 py-6 text-[12px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#9E1020] hover:shadow-2xl hover:scale-105">
                      <MessageCircle className="h-6 w-6" />
                      Contactar Paula
                    </a>
                    <a href="mailto:paulapodologia@gmail.com" 
                      className="flex items-center gap-3 rounded-full border border-[#E8D5D7] px-8 py-4 text-xs font-bold text-[#6B7280] transition hover:bg-[#FAF5F0] break-all">
                      <Mail className="h-4 w-4 shrink-0 text-[#CC1A2B]" />
                      paulapodologia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Miriam Ponce */}
            <RevealOnScroll>
              <div className="group rounded-[3rem] border border-[#E8D5D7] bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div>
                    <h2 className="text-editorial-title text-5xl font-black text-[#1A1A1A]">Miriam Ponce</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CC1A2B] mt-4 mb-8">Podóloga Clínica</p>
                    
                    <div className="flex items-center gap-5 py-4 px-6 rounded-2xl border border-[#CC1A2B]/10 bg-[#FAF5F0] w-fit">
                      <Clock3 className="h-5 w-5 text-[#CC1A2B]" />
                      <span className="text-sm font-bold text-[#1A1A1A]">Mar y Mié 14:30 – 17:30</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-1/2">
                    <a href="https://wa.me/56974112871" target="_blank" rel="noreferrer" 
                      className="flex items-center justify-center gap-4 rounded-full bg-[#CC1A2B] px-12 py-6 text-[12px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#9E1020] hover:shadow-2xl hover:scale-105">
                      <MessageCircle className="h-6 w-6" />
                      Contactar Miriam
                    </a>
                    <a href="mailto:miriampr.podologia@gmail.com" 
                      className="flex items-center gap-3 rounded-full border border-[#E8D5D7] px-8 py-4 text-xs font-bold text-[#6B7280] transition hover:bg-[#FAF5F0] break-all">
                      <Mail className="h-4 w-4 shrink-0 text-[#CC1A2B]" />
                      miriampr.podologia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Ubicación Clínica (Neutral & Red accents) */}
            <RevealOnScroll>
              <div className="rounded-[4rem] border-2 border-[#CC1A2B]/20 bg-white p-12 md:p-16 text-center relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full organic-shape bg-[#CC1A2B]/5 blur-2xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-8 h-20 w-20 items-center justify-center rounded-2xl bg-[#CC1A2B]/5 flex border border-[#CC1A2B]/10 text-[#CC1A2B]">
                    <MapPin className="h-10 w-10 text-[#CC1A2B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.5em] text-[#CC1A2B] mb-8">Sede Institucional San Miguel</span>
                  <h3 className="text-editorial-title text-5xl font-black mb-6 text-[#1A1A1A]">Cruz Roja San Miguel</h3>
                  <p className="text-xl text-[#6B7280] mb-12">Atención Podológica Profesional · Filial San Miguel</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link
                      href="/agendaProfesionales"
                      className="inline-flex h-20 items-center justify-center rounded-full bg-[#CC1A2B] px-16 text-[13px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#9E1020] hover:shadow-2xl hover:scale-110"
                    >
                      Agendar en Línea
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </main>
  );
}
