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
    if (!carouselApi || content.length <= 1) return;
    const intervalId = setInterval(() => {
      carouselApi.scrollNext();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [carouselApi, content.length]);

  return (
    <section id="servicios" className="relative scroll-mt-24 bg-white py-20 text-[#1A1A1A] sm:py-28 text-center sm:text-left">

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CC1A2B]">Servicios Podológicos</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-[#1A1A1A] sm:text-5xl">
                Nuestros Tratamientos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex justify-center rounded-full bg-[#1A1A1A] px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#CC1A2B]"
            >
              Ver todos los servicios
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <div className="relative">
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {content.map((service) => (
                  <CarouselItem
                    key={service.id}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      href="/agendaProfesionales"
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8D5D7] bg-[#FAF5F0] shadow-xl transition-all hover:shadow-2xl hover:border-[#CC1A2B]/40"
                    >
                      <div className="relative h-[320px] overflow-hidden bg-white sm:h-[360px]">
                        <img
                          src={imageErrors[service.id] ? "/ac3.png" : service.image}
                          alt={service.name}
                          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                          onError={() => setImageErrors(prev => ({ ...prev, [service.id]: true }))}
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold text-[#1A1A1A]">
                          {service.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden lg:flex -left-6 border-[#E8D5D7] bg-white text-[#CC1A2B] hover:bg-[#FEF2F2]" />
              <CarouselNext className="hidden lg:flex -right-6 border-[#E8D5D7] bg-white text-[#CC1A2B] hover:bg-[#FEF2F2]" />
            </Carousel>

            {content.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === index ? "w-8 bg-[#CC1A2B]" : "w-2 bg-[#CC1A2B]/20"}`}
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
