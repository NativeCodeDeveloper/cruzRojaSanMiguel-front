"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fallbackSlides = [
  {
    id: "fallback-1",
    image: "/ac3.png",
    alt: "Podología Cruz Roja San Miguel",
    title: "Excelencia Podológica: El Legado de Cruz Roja San Miguel.",
    text: "Atención especializada bajo estándares clínicos internacionales. Paula Arce y Miriam Ponce cuidan la salud de tus pies con profesionalismo y elegancia.",
  },
  {
    id: "fallback-2",
    image: "/Imagen 1.jpg",
    alt: "Atención podológica San Miguel",
    title: "Cuidando tu bienestar a través de la Prevención.",
    text: "Especialistas en la salud integral del pie, enfocadas en ofrecer un servicio ético y humano en el corazón de San Miguel.",
  },
];

export default function PortadaEditorialClinical() {
  const [dataPortada, setDataPortada] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const API = process.env.NEXT_PUBLIC_API_URL || "https://bartelsmansalud.nativecode.cl";

  async function cargarPortada() {
    try {
      const res = await fetch(`${API}/carruselPortada/seleccionarCarruselPortada`, {
        method: "GET",
        headers: { Accept: "application/json" },
        mode: "cors",
      });
      if (!res.ok) {
        setDataPortada([]);
        return;
      }
      const data = await res.json();
      setDataPortada(Array.isArray(data) ? data : []);
    } catch {
      setDataPortada([]);
    }
  }

  useEffect(() => {
    cargarPortada();
  }, []);

  const backendSlides = dataPortada
    .filter((item) => Number(item.estadoPublicacionPortada ?? 1) === 1)
    .map((item, index) => ({
      id: `portada-${item.id_publicacionesPortada ?? index}`,
      image: item.imagenPortada
        ? `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${item.imagenPortada}/portada`
        : "/ac3.png",
      alt: item.tituloPortadaCarrusel || "Podología Cruz Roja San Miguel",
      title: item.tituloPortadaCarrusel || "Excelencia en Salud Podológica.",
      text: item.descripcionPublicacionesPortada || "Atención especializada respaldada por la Cruz Roja.",
    }));

  const safeSlides = useMemo(
    () => (backendSlides.length > 0 ? backendSlides : fallbackSlides),
    [backendSlides]
  );

  useEffect(() => {
    if (safeSlides.length <= 1) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [safeSlides.length]);

  const currentSlide = safeSlides[activeIndex];

  return (
    <section id="inicio" className="relative -mt-24 bg-[#FAF5F0] min-h-[92svh] flex items-center overflow-hidden">

      {/* Organic Shape Background (Clinical Tint) */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[45vw] aspect-square organic-shape bg-[#CC1A2B]/5 blur-3xl opacity-40 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20 md:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">

          {/* — Text Content (Editorial Clinical) — */}
          <div className="w-full lg:w-1/2">
            <div className="animate-reveal-up">


              <h1 className="text-editorial-title text-5xl sm:text-7xl lg:text-8xl text-[#1A1A1A] max-w-xl">
                {currentSlide?.title}
              </h1>

              <div className="mt-10 max-w-lg">
                <p className="text-xl leading-relaxed text-[#6B7280]">
                  {currentSlide?.text}
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 items-center">
                <Link
                  href="/agendaProfesionales"
                  className="inline-flex h-16 items-center justify-center rounded-full bg-[#CC1A2B] px-14 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#9E1020] hover:shadow-2xl hover:scale-105"
                >
                  Agendar Atención
                </Link>
                <Link
                  href="/#servicios"
                  className="font-bold text-sm uppercase tracking-widest text-[#1A1A1A] border-b-2 border-transparent hover:border-[#CC1A2B] transition-all pb-1"
                >
                  Ver Servicios
                </Link>
              </div>

              {/* Dot Navigation */}
              {safeSlides.length > 1 && (
                <div className="mt-20 flex gap-2">
                  {safeSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-10 bg-[#CC1A2B]' : 'w-2 bg-[#CC1A2B]/15'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* — Image Container (Editorial Clinical) — */}
          <div className="relative mt-20 w-full lg:mt-0 lg:flex-1">
            <div className="animate-reveal-up-delay relative">

              {/* Soft Organic Blob behind image */}
              <div className="absolute -inset-10 -z-10 organic-shape bg-[#FAF5F0] border border-[#CC1A2B]/10 opacity-60" />

              <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_40px_100px_-30px_rgba(204,26,43,0.1)] bg-white p-3">
                <div className="relative overflow-hidden rounded-[2.8rem]">
                  {safeSlides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`transition-all duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 scale-100' : 'absolute inset-0 opacity-0 scale-110'}`}
                    >
                      <img
                        src={imageErrors[slide.id] ? "/ac3.png" : slide.image}
                        alt={slide.alt}
                        className="aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:h-[75svh]"
                        onError={() => setImageErrors(prev => ({ ...prev, [slide.id]: true }))}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
