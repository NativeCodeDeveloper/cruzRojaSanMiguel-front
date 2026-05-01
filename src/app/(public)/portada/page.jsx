"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const FEATURES = [
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.698-1.33 2.698H4.13c-1.36 0-2.33-1.698-1.33-2.698L4.2 15.3" />
      </svg>
    ),
    label: "Diagnóstico integral\nde tus pies",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    label: "Solo\nEfectivo",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    label: "Profesionales Certificadas\npor MINSAL y Superintendencia de Salud",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    label: "Atención\npersonalizada",
  },
];

const fallbackSlides = [
  {
    id: "fallback-1",
    image: "/imagen1.jpg",
    alt: "Podología Cruz Roja San Miguel",
    title: "Excelencia Podológica:",
    highlight: "El Legado de Cruz Roja San Miguel.",
    text: "Atención especializada bajo estándares clínicos internacionales. Paula Arce y Miriam Ponce cuidan la salud de tus pies con profesionalismo y elegancia.",
  },
  {
    id: "fallback-2",
    image: "/Imagen1.jpg",
    alt: "Atención podológica San Miguel",
    title: "Cuidando tu bienestar",
    highlight: "a través de la Prevención.",
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
    .map((item, index) => {
      const fullTitle = item.tituloPortadaCarrusel || "Excelencia en Salud Podológica.";
      const words = fullTitle.split(" ");
      const mid = Math.ceil(words.length / 2);
      return {
        id: `portada-${item.id_publicacionesPortada ?? index}`,
        image: item.imagenPortada
          ? `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${item.imagenPortada}/portada`
          : "/ac3.png",
        alt: fullTitle,
        title: words.slice(0, mid).join(" "),
        highlight: words.slice(mid).join(" "),
        text: item.descripcionPublicacionesPortada || "Atención especializada respaldada por la Cruz Roja.",
      };
    });

  const safeSlides = backendSlides.length > 0 ? backendSlides : fallbackSlides;

  useEffect(() => {
    if (safeSlides.length <= 1) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [safeSlides.length]);

  const currentSlide = safeSlides[activeIndex];

  return (
    <section id="inicio" className="relative -mt-24 overflow-hidden bg-white">

      {/* Fondo: imagen 0.jpg */}
      <img
        src="/piesfondo.webp"
        alt="Fondo pies"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Overlay suave para legibilidad */}
      <div className="pointer-events-none absolute inset-0 bg-white/80" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-10 md:px-8 lg:px-10">

        {/* Grid principal: imagen izquierda / texto derecha */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 min-h-[calc(100svh-12rem)]">

          {/* ── Columna izquierda: imagen ── */}
          <div className="relative order-2 lg:order-1 flex justify-center">

            {/* Blob decorativo de fondo */}
            <div className="absolute -inset-6 rounded-[3rem] bg-[#F9ECEC] opacity-60 blur-2xl" />

            {/* Contenedor imagen */}
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_-16px_rgba(176,24,36,0.18)]">
              {safeSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-1000 ease-in-out ${
                    index === activeIndex
                      ? "opacity-100 scale-100"
                      : "absolute inset-0 opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={imageErrors[slide.id] ? "/ac3.png" : slide.image}
                    alt={slide.alt}
                    className="aspect-[3/4] w-full object-cover"
                    onError={() => setImageErrors((prev) => ({ ...prev, [slide.id]: true }))}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}

              {/* Badge flotante en la imagen */}
              <div className="absolute right-4 top-6 z-20 rounded-2xl bg-[#ffffff] px-4 py-3 text-center shadow-lg">
                <img src="logosf.png" 
                alt="logo"
                height={90}
                width={90}
                className="object-center text-center"
                />
              </div>

              {/* Pill inferior */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                  Cruz Roja · San Miguel
                </span>
              </div>
            </div>

            {/* Card flotante en el borde izquierdo */}
            <div className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-2xl border border-[#F0E0E0] bg-white px-4 py-3 shadow-[0_8px_28px_-6px_rgba(176,24,36,0.18)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B01824]">Experiencia</p>
              <p className="mt-0.5 text-xl font-extrabold text-[#1A1A1A]">+de 20 años</p>
            </div>
          </div>

          {/* ── Columna derecha: texto ── */}
          <div className="order-1 lg:order-2 flex flex-col justify-center animate-reveal-up">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B01824]" />
              <p className="eyebrow text-[#B01824]">Podología clínica</p>
            </div>

            {/* Título */}
            <h1 className="text-editorial-title max-w-lg text-[#1A1A1A]">
              {currentSlide?.title}{" "}
              <span className="text-[#B01824]">{currentSlide?.highlight}</span>
            </h1>

            {/* Descripción */}
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#5F6772]">
              {currentSlide?.text}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/agendaProfesionales"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#B01824] px-8 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8F101E]"
              >
                Agendar Atención
              </Link>
              <Link
                href="/#servicios"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D7C8CA] bg-white px-8 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A] transition hover:border-[#B01824] hover:text-[#B01824]"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Dots */}
            {safeSlides.length > 1 && (
              <div className="mt-8 flex items-center gap-2.5">
                {safeSlides.map((slide, i) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Mostrar slide ${i + 1}`}
                    className={`rounded-full transition-all duration-500 ${
                      activeIndex === i
                        ? "h-2 w-10 bg-[#CC1A2B]"
                        : "h-2 w-2 bg-[#CC1A2B]/20 hover:bg-[#CC1A2B]/45"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Fila de features ── */}
        <div className="mt-12 border-t border-[#F0E0E0] pt-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FEATURES.map((feat, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#B01824]">
                  {feat.svg}
                </div>
                <p className="text-sm font-semibold leading-snug text-[#1A1A1A] whitespace-pre-line">
                  {feat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}