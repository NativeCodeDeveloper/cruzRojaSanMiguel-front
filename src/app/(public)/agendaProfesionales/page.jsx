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
      
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CC1A2B]">
            Cruz Roja San Miguel
          </p>
          <h1 className="mt-4 text-4xl font-black text-[#1A1A1A] sm:text-6xl">
            Reserva tu Hora
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[#6B7280]">
            Selecciona a la profesional para ver su disponibilidad y agendar tu atención podológica.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listaProfesionales.map((profesional) => (
            <button
              key={profesional.id_profesional}
              onClick={() => irAgendaProfesional(profesional.id_profesional)}
              className="group flex flex-col rounded-3xl border border-[#E8D5D7] bg-white p-8 text-left shadow-lg transition-all hover:-translate-y-1 hover:border-[#CC1A2B] hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#CC1A2B] mb-6 transition-colors group-hover:bg-[#CC1A2B] group-hover:text-white">
                <User className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-bold text-[#1A1A1A]">
                {profesional.nombreProfesional}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280] flex-1">
                {profesional.descripcionProfesional}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#FAF5F0] pt-6 group">
                <span className="text-xs font-bold uppercase tracking-widest text-[#CC1A2B]">
                  Ver Disponibilidad
                </span>
                <ArrowRight className="h-4 w-4 text-[#CC1A2B] transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
