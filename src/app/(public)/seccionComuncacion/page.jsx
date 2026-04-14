'use client'
import CarruselOfertas from "@/Componentes/CarruselOfertas";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SeccionComuncacion() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const [listaPublicaciones, setListaPublicaciones] = useState([]);

    async function listarPublicacionesCarrusel() {
        try {
            const res = await fetch(`${API}/publicaciones/seleccionarPublicaciones`, {
                method: "GET",
                headers: { Accept: "application/json" },
                mode: "cors",
                cache: "no-cache"
            })

            if (!res.ok) {
                console.error("No se han podido listar publicaciones.");
                setListaPublicaciones([])
                return []
            } else {
                const publicaciones = await res.json();
                setListaPublicaciones(publicaciones);
                return publicaciones;
            }
        } catch (err) {
            console.error("Problema al consultar backend desde la vista frontend:" + err);
            setListaPublicaciones([]);
            return [];
        }
    }

    useEffect(() => {
        listarPublicacionesCarrusel();
    }, []);

    const carrusel = listaPublicaciones.map((publicacion) =>
        `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${publicacion.imagenPublicaciones_primera}/full`
    )

    return (
        <main className="bg-[#FAF5F0] text-[#1A1A1A]">
            <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-24 md:px-10 md:pt-28">
                <p className="eyebrow text-[#B01824]">
                    Comunidad SaludB
                </p>
                <h1 className="mt-5 max-w-4xl text-editorial-title text-[#1A1A1A]">
                    Contenidos y orientacion para el cuidado integral.
                </h1>
                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#5F6772] sm:text-base">
                    Compartimos recomendaciones practicas para pacientes, familias y cuidadores en procesos de rehabilitacion y acompanamiento.
                </p>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24">
                <div className="section-shell rounded-[2rem] p-4 sm:p-6">
                    <CarruselOfertas
                        title=""
                        images={carrusel}
                        intervalMs={1800}
                    />

                    <div className="-mt-8 flex justify-center pb-4 sm:pb-6">
                        <Link
                            href="/catalogo"
                            className="rounded-full bg-[#B01824] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#8F101E]"
                        >
                            Ver soluciones
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
