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
    { value: "+30", label: "Proyectos entregados" },
    { value: "+10", label: "Marcas acompañadas" },
    { value: "05", label: "Años de experiencia" },
  ],
};

export const work = {
  eyebrow: "Clientes",
  title: "Con quién hemos trabajado",
  intro: "Reemplaza estos espacios con tus propios clientes y testimonios.",
  items: [
    {
      name: "Moscati",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Hospital",
      image: "/images/cliente-1.jpg",
    },
    {
      name: "Ebor",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Hospital",
      image: "/images/cliente-2.jpg",
    },
	{
      name: "FisioVi",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Fisioterapeuta",
      image: "/images/cliente-4.jpg",
    },
    {
      name: "Dr Federico Baena Q✅",
      quote:
        "Aquí va un testimonio corto del cliente sobre el resultado del proyecto.",
      role: "Dentista",
      image: "/images/cliente-3.jpg",
	  
	  <svg aria-label="Verificado" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><title>Verificado</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
	  
    },
  ],
};

export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos de tu próximo proyecto.",
  intro:
    "Escríbenos y te contactamos en menos de 48 horas. El formulario aún no está conectado — por ahora usa estos datos directos.",
  email: "studiocromatika@gmail.com",
  phone: "+52 1 772 106 7763",
  location: "Querétaro, México",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/cromatik_design/" },
    { label: "Facebook", href: "https://www.facebook.com/cromatikstudio" },
  ],
};

export const footer = {
  tagline: "Studio Cromatik — Diseño simple.",
  copyright: `© ${new Date().getFullYear()} Studio Cromatik. Todos los derechos reservados.`,
};
