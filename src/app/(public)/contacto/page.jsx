"use client";

import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

export default function ContactoClinical() {
  return (
    <main className="bg-[#FAF5F0] text-[#1A1A1A]">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto w-full max-w-5xl px-6 md:px-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="eyebrow mb-5 block text-[#CC1A2B]">Atencion profesional</span>
              <h1 className="text-editorial-title text-[#1A1A1A]">
                Canales de Contacto
              </h1>
              <p className="mt-5 mx-auto max-w-xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
                Coordinación directa para una atención podológica de excelencia en San Miguel.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-8">
            <RevealOnScroll>
              <div className="group rounded-[2rem] border border-[#E8D5D7] bg-white p-7 md:p-9 shadow-sm transition-all hover:shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div>
                    <h2 className="text-editorial-title text-[#1A1A1A]">Paula Arce</h2>
                    <p className="mt-3 mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#CC1A2B]">Podologa Clinica</p>
                    
                    <div className="flex w-fit items-center gap-4 rounded-2xl border border-[#CC1A2B]/10 bg-[#FAF5F0] px-5 py-3">
                      <Clock3 className="h-4 w-4 text-[#CC1A2B]" />
                      <span className="text-sm font-semibold text-[#1A1A1A]">Sabados 09:00 - 13:40</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-1/2">
                    <a href="https://wa.me/56982132679" target="_blank" rel="noreferrer" 
                      className="flex items-center justify-center gap-3 rounded-full bg-[#CC1A2B] px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#9E1020]">
                      <MessageCircle className="h-5 w-5" />
                      Contactar Paula
                    </a>
                    <a href="mailto:paulapodologia@gmail.com" 
                      className="flex items-center gap-3 rounded-full border border-[#E8D5D7] px-6 py-3 text-sm font-medium text-[#6B7280] transition hover:bg-[#FAF5F0] break-all">
                      <Mail className="h-4 w-4 shrink-0 text-[#CC1A2B]" />
                      paulapodologia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="group rounded-[2rem] border border-[#E8D5D7] bg-white p-7 md:p-9 shadow-sm transition-all hover:shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div>
                    <h2 className="text-editorial-title text-[#1A1A1A]">Miriam Ponce</h2>
                    <p className="mt-3 mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#CC1A2B]">Podologa Clinica</p>
                    
                    <div className="flex w-fit items-center gap-4 rounded-2xl border border-[#CC1A2B]/10 bg-[#FAF5F0] px-5 py-3">
                      <Clock3 className="h-4 w-4 text-[#CC1A2B]" />
                      <span className="text-sm font-semibold text-[#1A1A1A]">Mar y Mie 14:30 - 17:30</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-1/2">
                    <a href="https://wa.me/56974112871" target="_blank" rel="noreferrer" 
                      className="flex items-center justify-center gap-3 rounded-full bg-[#CC1A2B] px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#9E1020]">
                      <MessageCircle className="h-5 w-5" />
                      Contactar Miriam
                    </a>
                    <a href="mailto:miriampr.podologia@gmail.com" 
                      className="flex items-center gap-3 rounded-full border border-[#E8D5D7] px-6 py-3 text-sm font-medium text-[#6B7280] transition hover:bg-[#FAF5F0] break-all">
                      <Mail className="h-4 w-4 shrink-0 text-[#CC1A2B]" />
                      miriampr.podologia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#E8D5D7] bg-white p-9 text-center md:p-12">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#CC1A2B]/10 bg-[#CC1A2B]/5 text-[#CC1A2B]">
                    <MapPin className="h-8 w-8 text-[#CC1A2B]" />
                  </div>
                  <span className="eyebrow mb-5 text-[#CC1A2B]">Sede institucional San Miguel</span>
                  <h3 className="text-editorial-title mb-4 text-[#1A1A1A]">Cruz Roja San Miguel</h3>
                  <p className="mb-8 text-sm text-[#6B7280] sm:text-base">Atencion podologica profesional · Filial San Miguel</p>
                  
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                      href="/agendaProfesionales"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#CC1A2B] px-10 text-[11px] font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#9E1020]"
                    >
                      Agendar en linea
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
