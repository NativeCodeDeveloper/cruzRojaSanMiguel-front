const sections = [
  {
    title: "1. Identificación del prestador",
    body: [
      "Cruz Roja Filial San Miguel presta servicios de podología clínica profesional en su sede institucional.",
      "Canales oficiales de contacto: paulapodologia@gmail.com, miriampr.podologia@gmail.com y números de WhatsApp informados en este sitio web.",
    ],
  },
  {
    title: "2. Alcance de los servicios",
    body: [
      "Nuestros servicios incluyen atención podológica clínica integral, tratamiento de uñas encarnadas, manejo de pie diabético, control de callosidades y educación preventiva.",
      "Cada atención se realiza bajo estrictos estándares de higiene, seguridad y esterilización propios de la Cruz Roja.",
    ],
  },
  {
    title: "3. Reserva y asistencia",
    body: [
      "Las reservas se gestionan a través de la plataforma web o contacto directo con las profesionales según su disponibilidad.",
      "Para reagendar o cancelar una hora, solicitamos aviso previo para permitir el uso del bloque por otro paciente.",
      "La puntualidad es fundamental para asegurar la calidad de la atención en los bloques asignados.",
    ],
  },
  {
    title: "4. Evaluación y atención profesional",
    body: [
      "Cada paciente recibe una evaluación inicial para determinar el tratamiento adecuado según su condición de salud.",
      "Las profesionales Paula Arce y Miriam Ponce actúan bajo principios éticos y técnicos de podología clínica.",
    ],
  },
  {
    title: "5. Pagos y comprobantes",
    body: [
      "Los valores de los servicios se informan al momento de la reserva o en la recepción de la filial.",
      "El pago se realiza directamente en la institución conforme a las modalidades disponibles.",
    ],
  },
  {
    title: "6. Privacidad y datos personales",
    body: [
      "Los datos de los pacientes se utilizan exclusivamente para el seguimiento clínico y la coordinación de atenciones.",
      "Nos comprometemos con la confidencialidad absoluta de la ficha clínica de cada paciente.",
    ],
  },
  {
    title: "7. Propiedad intelectual",
    body: [
      "Los contenidos de este sitio (textos, imágenes y logos) son propiedad de la institución o de las profesionales respectivas.",
      "No se permite la reproducción total o parcial de los contenidos sin autorización expresa.",
    ],
  },
];

export default function TerminosYCondiciones() {
  return (
    <main className="bg-white text-[#1A1A1A]">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(204,26,43,0.06),transparent_34%),radial-gradient(circle_at_90%_2%,rgba(204,26,43,0.04),transparent_40%)]" />

        <div className="relative mx-auto w-full max-w-5xl px-6 md:px-10 xl:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#CC1A2B]">
            Cruz Roja San Miguel
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
            Información importante sobre el uso de nuestro servicio de podología clínica y condiciones generales de atención.
            <br />Última actualización: abril de 2026.
          </p>

          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-[#E8D5D7] bg-[#FAF5F0] p-6 sm:p-8"
              >
                <h2 className="text-lg font-bold text-[#1A1A1A] sm:text-xl">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-[#6B7280] sm:text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
