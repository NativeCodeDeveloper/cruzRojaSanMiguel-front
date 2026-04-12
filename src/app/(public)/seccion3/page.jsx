"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

const FALLBACK_CASE_IMAGE = "/Pub2.png";

export default function Seccion3() {
  const scrollerRef = useRef(null);
  const [imageErrors, setImageErrors] = useState({});
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL || "https://bartelsmansalud.nativecode.cl";

  async function listarPublicacionesSeccion3() {
    try {
      const res = await fetch(`${API}/publicaciones/seleccionarPublicaciones`, {
        method: "GET",
        headers: { Accept: "application/json" },
        mode: "cors",
      });

      if (!res.ok) {
        setListaPublicaciones([]);
        return [];
      }

      const publicaciones = await res.json();
      const activePublicaciones = Array.isArray(publicaciones)
        ? publicaciones.filter((item) => Number(item.estadoPublicacion ?? 1) === 1)
        : [];
      setListaPublicaciones(activePublicaciones);
      return activePublicaciones;
    } catch (err) {
      setListaPublicaciones([]);
      return [];
    }
  }

  useEffect(() => {
    listarPublicacionesSeccion3();
  }, []);

  const clinicalCases = listaPublicaciones.map((pub, index) => ({
    id: pub.id_publicaciones ?? `case-${index}`,
    title: pub.descripcionPublicaciones || `Publicación ${index + 1}`,
    image: `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${pub.imagenPublicaciones_primera}/full`,
  }));
  
  const content = clinicalCases.length > 0
    ? clinicalCases
    : [{ id: "fallback-case", title: "Publicación en proceso", image: FALLBACK_CASE_IMAGE }];

  const scrollByAmount = (direction) => {
    const container = scrollerRef.current;
    if (!container) return;
    const amount = 340;
    if (direction === "right") {
      container.scrollBy({ left: amount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ─── Sección Publicaciones (Ordenada y Limpia) ─── */}
      <section id="casos-clinicos" className="scroll-mt-24 bg-[#FAF5F0] py-20 text-[#1A1A1A] sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CC1A2B]">Información y Novedades</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black text-[#1A1A1A] sm:text-5xl">
                  Publicaciones Cruz Roja
                </h2>
                <p className="mt-4 text-[#6B7280]">Cuidado podológico con estándares de higiene y seguridad clínica.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollByAmount("left")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8D5D7] bg-white text-[#CC1A2B] transition hover:bg-[#FEF2F2]"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => scrollByAmount("right")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8D5D7] bg-white text-[#CC1A2B] transition hover:bg-[#FEF2F2]"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <div 
            ref={scrollerRef} 
            className="hide-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8"
          >
            {content.map((item) => (
              <article 
                key={item.id} 
                className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[30%] rounded-[2.5rem] border border-[#E8D5D7] bg-white shadow-xl overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-white">
                  <img
                    src={imageErrors[item.image] ? FALLBACK_CASE_IMAGE : item.image}
                    alt={item.title}
                    className="h-full w-full object-contain p-4"
                    onError={() => setImageErrors(prev => ({ ...prev, [item.image]: true }))}
                  />
                </div>
                <div className="p-8 text-center border-t border-[#FAF5F0]">
                  <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Final Ordenado ─── */}
      <section id="agenda" className="py-12 px-5 bg-white">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="rounded-[3rem] border-2 border-[#CC1A2B]/20 bg-white p-10 md:p-16 text-center text-[#1A1A1A] relative overflow-hidden shadow-xl">
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#CC1A2B] mb-6">Agenda tu Atención</p>
                <h2 className="text-editorial-title text-3xl font-black sm:text-5xl leading-tight max-w-3xl">
                  Reserva tu hora hoy mismo con nuestras profesionales.
                </h2>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/agendaProfesionales"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#CC1A2B] px-12 py-5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#9E1020] hover:shadow-2xl hover:scale-105"
                  >
                    Agendar Hora
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#E8D5D7] bg-white px-12 py-5 text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-[#FAF5F0] hover:border-[#CC1A2B]/20"
                  >
                    Ver Contacto
                  </Link>
                </div>
              </div>
              {/* Sutil decorado clínico */}
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#CC1A2B]/5 blur-3xl pointer-events-none" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
