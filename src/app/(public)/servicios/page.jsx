"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const servicios = [
  { nombre: "Atención podológica clínica integral", desc: "Evaluación completa del estado de los pies, diagnóstico y tratamiento de afecciones comunes." },
  { nombre: "Tratamiento de uñas encarnadas", desc: "Procedimiento especializado para aliviar el dolor y corregir el crecimiento inadecuado de la uña." },
  { nombre: "Eliminación de callosidades y durezas", desc: "Retiro seguro de piel endurecida que causa molestias o dolor al caminar." },
  { nombre: "Corte y limpieza de uñas", desc: "Corte adecuado y limpieza profunda para prevenir infecciones y uñas encarnadas." },
  { nombre: "Manejo y cuidado de pie diabético", desc: "Atención especializada y preventiva para personas con diabetes, evitando lesiones y complicaciones." },
  { nombre: "Tratamiento de hongos en uñas (onicomicosis)", desc: "Aplicación de técnicas y productos para combatir infecciones fúngicas en las uñas." },
  { nombre: "Desbastado de uñas engrosadas", desc: "Reducción del grosor de uñas endurecidas para evitar molestias, presión y posibles lesiones." },
  { nombre: "Evaluación y orientación preventiva", desc: "Asesoría personalizada sobre hábitos y cuidados diarios para mantener una buena salud podal." },
  { nombre: "Educación en higiene y salud podal", desc: "Recomendaciones prácticas para el correcto aseo y mantenimiento de los pies en el día a día." },
  { nombre: "Curaciones podológicas", desc: "Limpieza y tratamiento de pequeñas lesiones en los pies, favoreciendo la cicatrización y prevención de infecciones." },
];

export default function ServicioPage() {
  return (
    <main className="bg-white text-[#1A1A1A]">
      {/* Encabezado Ordenado */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32 xl:px-12 text-center md:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CC1A2B]">
          Servicios Profesionales
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#1A1A1A] sm:text-6xl">
          Nuestros Tratamientos
        </h1>
        <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-[#6B7280]">
          En Cruz Roja San Miguel ofrecemos atención podológica integral con los más altos estándares de higiene y seguridad clínica.
        </p>
      </section>

      {/* Grid de Servicios Ordenado */}
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-28 md:grid-cols-2 md:px-10 md:pb-32 xl:grid-cols-3 xl:px-12">
        {servicios.map((servicio, index) => (
          <article
            key={servicio.nombre}
            className="group rounded-3xl border border-[#E8D5D7] bg-[#FAF5F0] p-8 transition-all hover:bg-white hover:border-[#CC1A2B]/40 hover:shadow-xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#CC1A2B]/40">
              Servicio {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-4 text-xl font-bold text-[#1A1A1A]">{servicio.nombre}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              {servicio.desc}
            </p>
          </article>
        ))}
      </section>

      {/* CTA Final Ordenado */}
      <section className="border-t border-[#E8D5D7] bg-[#FAF5F0]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 md:flex-row md:px-10 md:py-24 xl:px-12 text-center md:text-left">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CC1A2B]">
              Comienza tu Cuidado
            </p>
            <h3 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-4xl">
              Agenda tu atención clínica.
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/agendaProfesionales"
              className="rounded-full bg-[#CC1A2B] px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#9E1020]"
            >
              Agendar Hora
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D7] bg-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] transition hover:bg-white hover:border-[#CC1A2B]/40"
            >
              Ver Contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
