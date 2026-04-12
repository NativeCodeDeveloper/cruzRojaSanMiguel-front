"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Nosotros", href: "/#porque-elegirnos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const updateProgress = () => {
      const y = window.scrollY || 0;
      const next = Math.min(y / 240, 1);

      setScrollProgress((current) => {
        if (Math.abs(current - next) < 0.01) return current;
        return next;
      });
      rafId = null;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const topAlpha = 0.02 + scrollProgress * 0.9;
  const middleAlpha = 0.01 + scrollProgress * 0.82;
  const bottomAlpha = scrollProgress * 0.72;
  const borderAlpha = scrollProgress * 0.18;
  const shadowAlpha = scrollProgress * 0.12;
  const blurPx = scrollProgress * 24;
  const borderWidth = scrollProgress > 0.02 ? 1 : 0;
  const navTextColor = "#1A1A1A";
  const mobileButtonTextColor = "#CC1A2B";
  const mobileButtonBg = "#ffffff";
  const mobileButtonBorder = "#FCCDD1";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color,border-width,backdrop-filter] duration-300"
      style={{
        background: `linear-gradient(180deg, rgba(250,245,240,${topAlpha}) 0%, rgba(250,245,240,${middleAlpha}) 48%, rgba(250,245,240,${bottomAlpha}) 100%)`,
        borderBottomColor: `rgba(204, 26, 43, ${borderAlpha})`,
        borderBottomStyle: "solid",
        borderBottomWidth: `${borderWidth}px`,
        boxShadow: `0 12px 30px -24px rgba(204,26,43,${shadowAlpha})`,
        backdropFilter: `blur(${blurPx}px) saturate(110%)`,
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 md:h-24 md:px-8 lg:px-6">
        <Link href="/#inicio" aria-label="Ir al inicio" className="group flex shrink-0 items-center gap-3 sm:gap-4">
          <div className="relative shrink-0">
            <Image
              src="/logosf1.png"
              alt="Cruz Roja San Miguel Podologia"
              width={84}
              height={84}
              priority
              className="h-[52px] w-auto object-contain sm:h-[64px]"
            />
          </div>
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[14px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-[#CC1A2B] hover:scale-105 inline-block"
                  style={{ color: navTextColor }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/agendaProfesionales"
            aria-label="Agendar hora"
            className="hidden rounded-full border-2 border-[#CC1A2B] bg-[#CC1A2B] px-10 py-4 text-[13px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 ease-out hover:bg-transparent hover:text-[#CC1A2B] sm:inline-flex"
          >
            Agendar hora
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full transition sm:h-10 sm:w-10 lg:hidden"
            style={{
              borderColor: mobileButtonBorder,
              backgroundColor: mobileButtonBg,
              color: mobileButtonTextColor,
            }}
          >
            {isOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden border-t border-[#FCCDD1] bg-[#FEF2F2] backdrop-blur-xl lg:hidden",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          "transition-all duration-300 ease-out",
        ].join(" ")}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:gap-2 sm:px-5 sm:py-5 md:px-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-transparent px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#CC1A2B] transition duration-300 hover:border-[#FCCDD1] hover:bg-[#FEF2F2] sm:text-xs"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/agendaProfesionales"
            onClick={() => setIsOpen(false)}
            aria-label="Agendar hora desde menu movil"
            className="mt-2 rounded-lg border border-[#CC1A2B] bg-[#CC1A2B] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#9E1020] sm:text-xs"
          >
            Agendar hora
          </Link>
        </div>
      </div>
    </header>
  );
}
