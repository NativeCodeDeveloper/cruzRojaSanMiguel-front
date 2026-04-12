"use client";

import Image from "next/image";
import Link from "next/link";

export default function MisionVisionPage() {
  return (
    <main className="bg-white text-[#1A1A1A]">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(204,26,43,0.06),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(204,26,43,0.04),transparent_42%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center xl:px-12 xl:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC1A2B]">
              Cruz Roja · Podología San Miguel
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">Misión y visión</h1>
            <p className="mt-7 text-justify text-sm leading-relaxed text-[#6B7280] sm:text-base">
              Nuestra misión es brindar atención podológica integral, segura y de calidad, bajo los estándares de higiene e institucionalidad de la Cruz Roja. Acompañamos a nuestros pacientes con vocación de servicio, calidez humana y enfoque preventivo.
            </p>
            <p className="mt-5 max-w-2xl text-justify text-sm leading-relaxed text-[#6B7280] sm:text-base">
              Nuestra visión es ser referentes en salud podal en la comunidad de San Miguel, consolidando una atención cercana, confiable y accesible para adultos, adultos mayores y pacientes con condiciones de salud especiales como el pie diabético.
            </p>

            <Link
              href="/agendaProfesionales"
              className="mt-10 inline-flex rounded-full border border-[#CC1A2B] bg-[#CC1A2B] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#9E1020]"
            >
              Agendar hora
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#E8D5D7] bg-[#FAF5F0] shadow-[0_24px_70px_-38px_rgba(204,26,43,0.2)]">
            <img
              src="/logosf.png"
              alt="Cruz Roja San Miguel Podologia"
              className="h-full w-full object-contain p-8"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
