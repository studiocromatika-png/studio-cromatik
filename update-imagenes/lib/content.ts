// ─────────────────────────────────────────────────────────────
// Todo el texto del sitio vive aquí. Edita estos valores y el
// contenido se actualiza en toda la página, sin tocar el diseño.
// ─────────────────────────────────────────────────────────────

export const nav = {
  logoAlt: "Studio Cromatik",
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Estudio", href: "#estudio" },
    { label: "Trabajo", href: "#trabajo" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: { label: "Empezar un proyecto", href: "#contacto" },
};

export const hero = {
  eyebrow: "Studio de diseño",
  title: "Diseño simple, con carácter.",
  subtitle:
    "Somos Studio Cromatik: creamos identidades de marca, sitios web y piezas visuales que se sienten claras, cuidadas y memorables. Sin ruido, con intención.",
  ctaPrimary: { label: "Ver servicios", href: "#servicios" },
  ctaSecondary: { label: "Escríbenos", href: "#contacto" },
};

export const services = {
  eyebrow: "Qué hacemos",
  title: "Servicios",
  intro:
    "Trabajamos de la mano con cada cliente para construir marcas simples y consistentes, del concepto a la ejecución.",
  items: [
    {
      title: "Identidad de marca",
      description:
        "Logotipo, sistema visual, paleta de color y lineamientos para que tu marca se vea igual de bien en cualquier lugar.",
      color: "pine",
      image: "/images/servicio-identidad.jpg",
    },
    {
      title: "Diseño web",
      description:
        "Sitios rápidos, simples y a la medida — pensados para convertir visitantes en clientes, no solo para verse bien.",
      color: "lilac",
      image: "/images/servicio-web.jpg",
    },
    {
      title: "Dirección de arte",
      description:
        "Fotografía, contenido y campañas con una dirección visual clara, consistente con la identidad de la marca.",
      color: "chartreuse",
      image: "/images/servicio-direccion.jpg",
    },
    {
      title: "Redes y contenido",
      description:
        "Sistemas de contenido para redes sociales que mantienen la marca reconocible publicación tras publicación.",
      color: "blush",
      image: "/images/servicio-contenido.jpg",
    },
  ],
};

export const about = {
  eyebrow: "El estudio",
  title: "Menos ruido, más diseño.",
  paragraphs: [
    "Studio Cromatik nació de una idea simple: el buen diseño no necesita ser complicado para ser memorable. Creemos en la claridad, en el color con propósito y en los sistemas visuales que envejecen bien.",
    "Trabajamos con marcas personales, negocios y equipos que quieren verse tan cuidados como el trabajo que hacen — sin perder tiempo en procesos innecesarios.",
  ],
  stats: [
    { value: "+00", label: "Proyectos entregados" },
    { value: "+00", label: "Marcas acompañadas" },
    { value: "00", label: "Años de experiencia" },
  ],
};

export const work = {
  eyebrow: "Clientes",
  title: "Con quién hemos trabajado",
  intro: "Reemplaza estos espacios con tus propios clientes y testimonios.",
  items: [
    {
      name: "Cliente uno",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Rol o industria",
      image: "/images/cliente-1.jpg",
    },
    {
      name: "Cliente dos",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Rol o industria",
      image: "/images/cliente-2.jpg",
    },
    {
      name: "Cliente tres",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Rol o industria",
      image: "/images/cliente-3.jpg",
    },
  ],
};

export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos de tu próximo proyecto.",
  intro:
    "Escríbenos y te contactamos en menos de 48 horas. El formulario aún no está conectado — por ahora usa estos datos directos.",
  email: "hola@studiocromatik.com",
  phone: "+52 000 000 0000",
  location: "Querétaro, México",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

export const footer = {
  tagline: "Studio Cromatik — Diseño simple.",
  copyright: `© ${new Date().getFullYear()} Studio Cromatik. Todos los derechos reservados.`,
};
