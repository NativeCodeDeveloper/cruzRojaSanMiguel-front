"use client";

import { useEffect, useMemo, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

/**
 * Carrusel de imágenes grande, limpio y sin bordes
 */
export function CarruselOfertas({
    title = "Trusted by thousands of businesses worldwide",
    images,
    intervalMs = 1800,
    itemClassName = "basis-full sm:basis-1/2 lg:basis-1/3",
    imageClassName = "",
    ctaText = "",
    onCtaClick = undefined,
}) {
    const items = useMemo(() => {
        const arr = images ?? [];

        return arr
            .filter((src) => typeof src === "string" && src.trim().length > 0)
            .map((src, i) => ({
                src,
                alt: `Imagen ${i + 1}`,
            }));
    }, [images]);

    // @ts-ignore
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const hasMultiple = items.length > 1;

    useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        onSelect();
        api.on("select", onSelect);
        api.on("reInit", onSelect);
        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    useEffect(() => {
        if (!api || !hasMultiple) return;

        const id = setTimeout(() => {
            const lastIndex = api.scrollSnapList().length - 1;
            const nextIndex =
                api.selectedScrollSnap() >= lastIndex
                    ? 0
                    : api.selectedScrollSnap() + 1;

            api.scrollTo(nextIndex);
            setCurrent(nextIndex);
        }, intervalMs);

        return () => clearTimeout(id);
    }, [api, current, intervalMs, hasMultiple]);

    return (
        <section className="w-full py-8 lg:py-12">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    {title ? (
                        <h2 className="max-w-2xl text-left text-lg font-medium tracking-tight md:text-2xl">
                            {title}
                        </h2>
                    ) : null}

                    <Carousel setApi={setApi} opts={{ loop: hasMultiple, align: "start" }} className="w-full">
                    <CarouselContent className="-ml-0 sm:-ml-6">
                            {items.map((img, index) => (
                                <CarouselItem
                                    key={`${img.src}-${index}`}
                                    className={`${itemClassName} pl-0 sm:pl-6`}
                                >
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#E4D9DA] bg-white">
                                        <div className="relative h-56 w-full sm:h-64 md:h-72 lg:h-80">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                loading={index < 4 ? "eager" : "lazy"}
                                                className={`
                                                    w-full h-full
                                                    ${imageClassName}
                                                    object-cover object-center
                                                    sm:transition-transform sm:duration-700 sm:hover:scale-105
                                                `}
                                            />
                                            {ctaText && index === 0 && (
                                                <button
                                                    type="button"
                                                    onClick={onCtaClick}
                                                    className="
                                                        absolute
                                                        bottom-3 left-1/2 -translate-x-1/2
                                                        sm:bottom-5
                                                        rounded-full
                                                        bg-white/95 text-slate-900
                                                        px-5 py-3
                                                        text-sm sm:text-base font-semibold
                                                        shadow-lg shadow-black/10
                                                        ring-1 ring-black/10
                                                        backdrop-blur
                                                        transition
                                                        hover:bg-white
                                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400
                                                    "
                                                >
                                                    {ctaText}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {hasMultiple && (
                        <div className="mt-2 flex justify-center gap-2">
                            {items.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => api?.scrollTo(idx)}
                                    aria-label={`Ir a la imagen ${idx + 1}`}
                                    className={`rounded-full transition-all duration-300 ${
                                        current === idx ? "h-2 w-8 bg-[#CC1A2B]" : "h-2 w-2 bg-[#CC1A2B]/25 hover:bg-[#CC1A2B]/45"
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {!items.length && (
                        <p className="text-sm text-muted-foreground">
                            No hay imágenes para mostrar.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CarruselOfertas;
