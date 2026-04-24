import { useEffect } from "react";
import {
  Heart,
  Stethoscope,
  Activity,
  Brain,
  ShieldPlus,
  Pill,
  Sparkles,
  Droplets,
  MessageCircle,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const PHONE_DISPLAY = "311 347 3170";
const PHONE_RAW = "573113473170";
const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
  "Hola Yineth, me gustaría más información sobre tus servicios de cuidado en el hogar."
)}`;

const services = [
  { icon: Heart, title: "Educación a familiares", description: "Acompañamiento sobre patologías para que la familia cuide con seguridad." },
  { icon: Droplets, title: "Drenajes linfáticos", description: "Técnicas suaves que activan la circulación y reducen la retención." },
  { icon: Activity, title: "Terapia física y respiratoria", description: "Recuperación de movilidad y mejora de la función pulmonar." },
  { icon: Brain, title: "Fonoaudiología y ocupacional", description: "Estimulación del lenguaje y autonomía en las actividades diarias." },
  { icon: ShieldPlus, title: "Capacitación en primeros auxilios", description: "Aprende a actuar con calma ante una emergencia en casa." },
  { icon: Pill, title: "Medicamentos e insumos", description: "Venta de insumos médicos y equipos para el cuidado en el hogar." },
  { icon: Sparkles, title: "Masajes antiestrés", description: "Sesiones de relajación profunda para liberar tensión." },
  { icon: Stethoscope, title: "Madero terapia & sueroterapia", description: "Tratamientos complementarios para tu bienestar integral." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Yineth Galindo · Cuidados de salud en el hogar";

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Cuidados expertos y amorosos en tu hogar. Enfermería, terapias, drenajes y más con Yineth Galindo. WhatsApp 311 347 3170."
    );

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", window.location.origin + "/");

    const ldId = "ld-localbusiness";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Yineth Galindo - Cuidados en el hogar",
      telephone: "+57 311 347 3170",
      description:
        "Servicios profesionales de enfermería y cuidado en el hogar: terapias, drenajes, primeros auxilios y más.",
      areaServed: "Colombia",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Yineth por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <header className="border-b border-border/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4" />
            </span>
            Yineth Galindo
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#servicios" className="transition-colors hover:text-foreground">Servicios</a>
            <a href="#sobre-mi" className="transition-colors hover:text-foreground">Sobre mí</a>
            <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="container py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/70" />
            Atención profesional en casa
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Cuidados expertos y amorosos
            <span className="block text-primary">en tu hogar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Un hogar lleno de vida y bienestar. Enfermería, terapias y acompañamiento
            con la calidez que tu familia merece.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-whatsapp-foreground shadow-lg shadow-whatsapp/25 transition-all hover:shadow-xl hover:shadow-whatsapp/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
              <span className="text-whatsapp-foreground/80">{PHONE_DISPLAY}</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Enfermera profesional", "Atención domiciliaria", "Trato cálido"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="border-y border-border/60 bg-muted/40">
        <div className="container grid items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Sobre mí
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Hola, soy Yineth Galindo
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Enfermera apasionada por el cuidado humano. Llevo el conocimiento clínico
              hasta tu hogar para acompañar a quienes amas con paciencia, técnica y
              cariño. Cada visita es un espacio seguro donde la salud y la dignidad
              caminan de la mano.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Más de una década de experiencia en cuidados domiciliarios",
                "Formación continua en terapias y rehabilitación",
                "Acompañamiento personalizado para cada familia",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent to-secondary p-10 flex items-center justify-center">
              <Stethoscope className="h-32 w-32 text-primary/60" strokeWidth={1.2} />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm">
              <p className="text-2xl font-semibold text-primary">10+</p>
              <p className="text-xs text-muted-foreground">años cuidando familias</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Cuidado integral, en casa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diseñamos cada servicio para que tu familia recupere bienestar sin salir del hogar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-t border-border/60 bg-gradient-to-b from-accent/40 to-background">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-sm md:p-14">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Contacto
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Hablemos sobre el cuidado de los tuyos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Cuéntame qué necesitas y diseñamos un plan a la medida. Respondo
              personalmente por WhatsApp.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-whatsapp-foreground shadow-lg shadow-whatsapp/25 transition-all hover:shadow-xl hover:shadow-whatsapp/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Escribir al {PHONE_DISPLAY}
            </a>

            <div className="mt-10 grid gap-4 text-sm sm:grid-cols-2">
              <a
                href={`tel:+${PHONE_RAW}`}
                className="flex items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 py-4 transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 {PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 py-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Atención domiciliaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Yineth Galindo · Cuidados en el hogar</p>
          <p>Hecho con cariño para tu familia</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
