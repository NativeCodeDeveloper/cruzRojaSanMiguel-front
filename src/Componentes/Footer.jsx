import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre Nosotros", href: "/#porque-elegirnos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nuestro Equipo", href: "/#equipo" },
  { label: "Contacto", href: "/contacto" },
];

const serviceHighlights = [
  "Podología Clínica Integral",
  "Uñas Encarnadas",
  "Manejo de Pie Diabético",
  "Control de Callosidades",
  "Hongos en las Uñas",
  "Educación Preventiva",
];

export default function FooterLimpio() {
  return (
    <footer id="footer" className="relative bg-white text-[#1A1A1A] border-t border-[#E8D5D7]">
      
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* — Columna Marca — */}
          <div className="lg:col-span-5">
            <Link href="/#inicio" className="inline-block">
              <img
                src="/logosf.png"
                alt="Cruz Roja San Miguel Podología"
                className="h-16 w-auto object-contain object-left mb-6"
              />
            </Link>
            <h2 className="text-2xl font-black leading-tight tracking-tight text-[#1A1A1A] sm:text-[2rem]">
              Cuidado Profesional <br /><span className="text-[#CC1A2B]">Cruz Roja San Miguel</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#6B7280] sm:text-[15px]">
              Atención podológica especializada con los más altos estándares de higiene y seguridad clínica.
            </p>

            <div className="mt-8">
              <Link
                href="/agendaProfesionales"
                className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-8 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#CC1A2B]"
              >
                Agendar ahora
              </Link>
            </div>
          </div>

          {/* — Enlaces rápidos — */}
          <div className="lg:col-span-2">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#CC1A2B]">Navegacion</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] font-medium text-[#6B7280] transition hover:text-[#CC1A2B]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* — Servicios — */}
          <div className="lg:col-span-2">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#CC1A2B]">Servicios</p>
            <ul className="space-y-3">
              {serviceHighlights.map((item) => (
                <li key={item} className="text-[15px] font-medium text-[#6B7280]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* — Contacto — */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#CC1A2B]">Sede oficial</p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#CC1A2B] shrink-0 mt-1" />
                <p className="text-[15px] text-[#6B7280]">
                  Cruz Roja Filial San Miguel,<br />Región Metropolitana
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#FAF5F0]">
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#9CA3AF]">Paula Arce</p>
                  <a href="https://wa.me/56982132679" className="flex items-center gap-2 text-[15px] font-semibold text-[#1A1A1A] hover:text-[#CC1A2B]">
                    <MessageCircle className="h-4 w-4" />
                    +56 9 8213 2679
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#9CA3AF]">Miriam Ponce</p>
                  <a href="https://wa.me/56974112871" className="flex items-center gap-2 text-[15px] font-semibold text-[#1A1A1A] hover:text-[#CC1A2B]">
                    <MessageCircle className="h-4 w-4" />
                    +56 9 7411 2871
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* — Barra inferior — */}
        <div className="mt-16 pt-8 border-t border-[#E8D5D7] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-[8px] font-medium tracking-[0.02em] text-[#9CA3AF] sm:text-[9px] md:text-left">
            © {new Date().getFullYear()} Cruz Roja San Miguel · Todos los derechos reservados
          </p>
          <a
            href="https://nativecode.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-black uppercase tracking-[0.12em] text-[#CC1A2B] transition hover:opacity-80"
          >
            Desarrollado por nativecode.cl
          </a>
        </div>
      </div>
    </footer>
  );
}
