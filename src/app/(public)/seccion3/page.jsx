"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const FALLBACK_CASE_IMAGE = "/Pub2.png";

export default function Seccion3() {
  const [imageErrors, setImageErrors] = useState({});
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
  const [carouselApi, setCarouselApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const hasMultiple = content.length > 1;

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrentIndex(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || !hasMultiple) return;
    const intervalId = setInterval(() => {
      carouselApi.scrollNext();
    }, 7000);
    return () => clearInterval(intervalId);
  }, [carouselApi, hasMultiple]);

  return (
    <>
      <section
        id="casos-clinicos"
        className="scroll-mt-24 bg-[#F6F2ED] py-20 text-[#1A1A1A] sm:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow text-[#B01824]">Informacion y Novedades</p>
                <h2 className="mt-4 max-w-2xl text-editorial-title text-[#1A1A1A]">
                  Publicaciones Cruz Roja
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#5F6772]">
                  Educacion, prevencion y recomendaciones para que cada paciente cuide su salud podologica en casa.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => carouselApi?.scrollPrev()}
                  disabled={!hasMultiple}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9CDCF] bg-white text-[#8F101E] transition hover:border-[#B01824] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => carouselApi?.scrollNext()}
                  disabled={!hasMultiple}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9CDCF] bg-white text-[#8F101E] transition hover:border-[#B01824] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: hasMultiple }}
              className="w-full"
            >
              {/* items-start + pb extra para absorber el stagger */}
              <CarouselContent className="-ml-5 lg:-ml-6 items-start pb-12">
                {content.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className={`pl-5 basis-[78%] sm:basis-[44%] lg:basis-[30%] lg:pl-6 ${index % 2 === 1 ? "pt-10" : index % 3 === 2 ? "pt-5" : ""}`}
                  >
                    <article className="group h-full overflow-hidden rounded-[1.75rem] border border-[#E4D9DA] bg-white shadow-[0_2px_16px_-8px_rgba(26,26,26,0.06)] transition-all hover:border-[#C9B4B7] hover:shadow-[0_24px_52px_-18px_rgba(176,24,36,0.14)]">
                      {/* Imagen */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#FBF8F4]">
                        <img
                          src={imageErrors[item.image] ? FALLBACK_CASE_IMAGE : item.image}
                          alt={item.title}
                          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                          onError={() => setImageErrors((prev) => ({ ...prev, [item.image]: true }))}
                        />
                        {/* Número badge */}
                        <span className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#B01824] text-[10px] font-extrabold text-white shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Panel inferior */}
                      <div className="border-t border-[#F5ECEC] bg-linear-to-b from-white to-[#FDF8F8] px-5 py-4">
                        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#B01824]">
                          Publicación Cruz Roja
                        </p>
                        <h3 className="text-[14px] font-bold leading-snug text-[#1A1A1A]">
                          {item.title}
                        </h3>
                        <div className="mt-2.5 flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8F101E]/50 transition-colors group-hover:text-[#B01824]">
                          <span>Ver publicación</span>
                          <ChevronRight className="h-3 w-3" />
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </RevealOnScroll>

          {hasMultiple && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => carouselApi?.scrollTo(index)}
                  aria-label={`Ir a publicacion ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === index ? "h-2 w-8 bg-[#CC1A2B]" : "h-2 w-2 bg-[#CC1A2B]/20 hover:bg-[#CC1A2B]/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="agenda" className="py-12 px-5 bg-white">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E4D9DA] bg-[#F8F5F1] p-10 text-center text-[#1A1A1A] md:p-16">
              <div className="relative z-10 flex flex-col items-center">
                <p className="eyebrow mb-6 text-[#B01824]">Agenda tu Atencion</p>
                <h2 className="max-w-3xl text-editorial-title text-[#1A1A1A]">
                  Reserva tu hora hoy mismo con nuestras profesionales.
                </h2>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/agendaProfesionales"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#B01824] px-12 py-5 text-[11px] font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#8F101E]"
                  >
                    Agendar Hora
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#D7C8CA] bg-white px-12 py-5 text-[11px] font-black uppercase tracking-[0.15em] text-[#1A1A1A] transition hover:border-[#B01824] hover:text-[#B01824]"
                  >
                    Ver Contacto
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
