'use client'

import Link from "next/link";
import RevealOnScroll from "@/Componentes/RevealOnScroll";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Seccion2() {
  const API = process.env.NEXT_PUBLIC_API_URL || "https://bartelsmansalud.nativecode.cl";
  const [infoData, setInfoData] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const [carouselApi, setCarouselApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const fallbackServices = [
    {
      id: "srv-1",
      name: "Tratamiento de uñas encarnadas",
      description: "Procedimiento especializado para aliviar el dolor y corregir el crecimiento inadecuado de la uña, evitando infecciones.",
      image: "/ac3.png",
    },
    {
      id: "srv-2",
      name: "Manejo y cuidado de pie diabético",
      description: "Atención especializada y preventiva para personas con diabetes, enfocada en evitar lesiones, infecciones y complicaciones mayores.",
      image: "/ac3.png",
    },
    {
      id: "srv-3",
      name: "Eliminación de callosidades",
      description: "Retiro seguro de piel endurecida que causa molestias o dolor, mejorando la comodidad al caminar.",
      image: "/ac3.png",
    },
  ];

  async function loadServices() {
    try {
      const mapTituloDetalle = (items) =>
        items.map((item, index) => ({
          id: `titulo-${item.id_publicacionesTituloDescripcion ?? index}`,
          name: (item.publicacionesTitulo || "").trim() || `Publicación ${index + 1}`,
          description:
            (item.publicacionesDescripcion || "").trim() ||
            "Atención personalizada con acompañamiento profesional para resultados óptimos.",
          image: item.publicacionesTituloDescripcionImagen
            ? `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${item.publicacionesTituloDescripcionImagen}/card`
            : "/ac3.png",
        }));

      const resTitulo = await fetch(`${API}/publicacionesTituloDetalle/seleccionarPublicacionesTituloDetalle`, {
        method: "GET",
        headers: { Accept: "application/json" },
        mode: "cors",
      });

      if (resTitulo.ok) {
        const dataTitulo = await resTitulo.json();
        const activeTitulo = Array.isArray(dataTitulo)
          ? dataTitulo.filter((item) => Number(item.publicacionesTituloDescripcion_estado ?? 1) === 1)
          : [];

        if (activeTitulo.length > 0) {
          setInfoData(mapTituloDetalle(activeTitulo));
          return;
        }
      }
      setInfoData(fallbackServices);
    } catch {
      setInfoData(fallbackServices);
      toast.error("No ha sido posible cargar los servicios.");
    }
  }

  useEffect(() => {
    loadServices();
  }, []);

  const content = infoData.length > 0 ? infoData : fallbackServices;
  const hasMultiple = content.length > 1;
  const getPreview = (text) =>
    text.length > 88 ? `${text.slice(0, 85).trim()}...` : text;

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
    }, 6500);
    return () => clearInterval(intervalId);
  }, [carouselApi, hasMultiple]);

  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 bg-white py-20 text-[#1A1A1A] sm:py-28 text-center sm:text-left"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-[#B01824]">Servicios Podológicos</p>
              <h2 className="mt-4 max-w-2xl text-editorial-title text-[#1A1A1A]">
                Nuestros Tratamientos
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#5F6772]">
                Protocolos de atencion seguros, experiencia clinica y seguimiento para resultados sostenibles.
              </p>
            </div>
            <Link
              href="/servicios"
              className="inline-flex justify-center rounded-full border border-[#CC1A2B]/20 bg-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] transition hover:border-[#CC1A2B]/45 hover:text-[#B01824]"
            >
              Ver Todos Los Servicios
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <div className="relative">
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: hasMultiple }}
              className="w-full"
            >
              {/* items-start para que el stagger vertical funcione */}
              <CarouselContent className="-ml-5 lg:-ml-6 items-start">
                {content.map((service, idx) => (
                  <CarouselItem
                    key={service.id}
                    className={`pl-5 basis-[82%] sm:basis-[52%] lg:basis-[36%] lg:pl-6 ${idx % 2 === 1 ? "pt-10" : ""}`}
                  >
                    <Link
                      href="/agendaProfesionales"
                      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#E4D9DA] bg-white shadow-[0_2px_16px_-8px_rgba(26,26,26,0.07)] transition-all hover:border-[#C9B4B7] hover:shadow-[0_24px_52px_-18px_rgba(176,24,36,0.15)]"
                    >
                      <div className="relative h-64 overflow-hidden bg-[#F3EEEA] sm:h-72">
                        <img
                          src={imageErrors[service.id] ? "/ac3.png" : service.image}
                          alt={service.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          onError={() => setImageErrors((prev) => ({ ...prev, [service.id]: true }))}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                        {/* Badge top */}
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#B01824] backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#CC1A2B]" />
                          Servicio Clínico
                        </span>
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                          <h3 className="text-lg font-bold leading-tight drop-shadow-sm">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                      {/* Panel inferior */}
                      <div className="flex flex-col bg-linear-to-b from-white to-[#FDF8F8] p-4 sm:p-5">
                        <p className="text-[13px] leading-relaxed text-[#5F6772]">
                          {getPreview(service.description)}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-[#F0E8E8] pt-3">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#5F6772]">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Agenda disponible
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#B01824] opacity-60 transition-opacity group-hover:opacity-100">
                            Ver más →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {hasMultiple && (
                <>
                  <CarouselPrevious className="hidden lg:flex -left-6 border-[#CC1A2B]/25 bg-white text-[#CC1A2B] hover:bg-[#FEF2F2] disabled:opacity-40" />
                  <CarouselNext className="hidden lg:flex -right-6 border-[#CC1A2B]/25 bg-white text-[#CC1A2B] hover:bg-[#FEF2F2] disabled:opacity-40" />
                </>
              )}
            </Carousel>

            {hasMultiple && (
              <div className="mt-8 flex items-center justify-center gap-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Ir al servicio ${index + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      currentIndex === index ? "h-2 w-8 bg-[#CC1A2B]" : "h-2 w-2 bg-[#CC1A2B]/20 hover:bg-[#CC1A2B]/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
