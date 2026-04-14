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
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
    <div className="relative min-h-screen px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[#FAF5F0]">

      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#CC1A2B]">
            Cruz Roja San Miguel
          </p>
          <h1 className="mt-4 text-3xl font-black text-[#1A1A1A] sm:text-[2.6rem]">
            Reserva tu Hora
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6B7280]">
            Selecciona a la profesional para ver su disponibilidad y agendar tu atención podológica.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#EDE0E0] bg-white text-left shadow-[0_1px_12px_-4px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:border-[#D4AAAE] hover:shadow-[0_16px_40px_-12px_rgba(176,24,36,0.14)]"
              >
                <div className="flex items-start gap-4 p-5">
                  {/* Avatar */}
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#FEF2F2] to-[#FCCDD1] text-sm font-bold text-[#B01824]">
                    {initials || <User className="h-4 w-4" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="!text-[9px] font-bold uppercase tracking-[0.18em] text-[#B01824]">
                      Podóloga · Cruz Roja
                    </p>
                    <h2 className="mt-0.5 !text-[13px] font-semibold text-[#1A1A1A]">
                      {profesional.nombreProfesional}
                    </h2>
                  </div>
                </div>

                <div className="border-t border-[#F5ECEC] px-5 pb-5 pt-4">
                  <p className="!text-[12px] leading-relaxed text-[#6B7280]">
                    {profesional.descripcionProfesional}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#CC1A2B]">
                      Ver Disponibilidad
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#CC1A2B] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
