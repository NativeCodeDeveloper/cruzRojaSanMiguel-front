"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ArrowRight, User } from "lucide-react";

export default function AgendaProfesionales() {
  const API = process.env.NEXT_PUBLIC_API_URL || "https://bartelsmansalud.nativecode.cl";
  const router = useRouter();
  const [listaProfesionales, setListaProfesionales] = useState([]);

  function irAgendaProfesional(id_profesional) {
    router.push(`/agendaEspecificaProfersional/${id_profesional}`);
  }

  async function seleccionarProfesionales() {
    try {
      const res = await fetch(`${API}/profesionales/seleccionarTodosProfesionales`, {
        method: "GET",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        mode: "cors",
      });
      const dataProfesionales = await res.json();
      setListaProfesionales(dataProfesionales);
    } catch {
      return toast.error("No ha sido posible listar profesionales, contacte a soporte IT");
    }
  }

  useEffect(() => {
    seleccionarProfesionales();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF5F0]">

      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#FEF2F2] opacity-70 blur-3xl" />
        <div className="absolute bottom-1/3 -left-24 h-72 w-72 rounded-full bg-[#FEF2F2] opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCCDD1] bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#CC1A2B] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CC1A2B]" />
            Cruz Roja San Miguel
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Reserva tu Hora
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#5F6772]">
            Selecciona a la profesional para ver su disponibilidad y agendar tu atención podológica.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[#CC1A2B]/35 to-transparent" />
        </div>

        {/* ── Cards ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {listaProfesionales.map((profesional) => {
            const initials = (profesional.nombreProfesional || "")
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0].toUpperCase())
              .join("");

            return (
              <button
                key={profesional.id_profesional}
                onClick={() => irAgendaProfesional(profesional.id_profesional)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8DCDC] bg-white text-left shadow-[0_1px_8px_-4px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AAAE] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.10)]"
              >
                {/* Cabecera */}
                <div className="flex items-center gap-4 px-6 pt-6 pb-5">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2ED] text-sm font-bold text-[#5F6772]">
                    {initials || <User className="h-4 w-4" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B01824]/70 mb-0.5">
                      Podóloga · Cruz Roja
                    </p>
                    <h2 className="text-[15px] font-semibold tracking-tight text-[#1A1A1A]">
                      {profesional.nombreProfesional}
                    </h2>
                  </div>
                </div>

                {/* Separador */}
                <div className="mx-6 h-px bg-[#F0E8E8]" />

                {/* Descripción */}
                <div className="flex-1 px-6 py-5">
                  <p className="text-[13px] leading-relaxed text-[#6B7280]">
                    {profesional.descripcionProfesional}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between px-6 pb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B01824]">
                    Ver disponibilidad
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#B01824] transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Nota informativa */}
        <p className="mt-12 text-center text-[13px] text-[#5F6772]">
          Al seleccionar una profesional podrás ver su calendario de disponibilidad y confirmar tu reserva en línea.
        </p>

      </div>
    </div>
  );
}
