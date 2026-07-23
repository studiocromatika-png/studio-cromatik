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
  title: "Creando marcas con intención.",
  subtitle:
    "Somos Studio Cromatik: transformamos ideas en estrategias visuales que impulsan marcas. Combinamos creatividad, diseño y estrategia para construir identidades auténticas, coherentes y memorables que conectan con las personas y acompañan el crecimiento de cada negocio.",
  ctaPrimary: { label: "Ver servicios", href: "#servicios" },
  ctaSecondary: { label: "Escríbenos", href: "#contacto" },
};

export const services = {
  eyebrow: "Qué hacemos",
  title: "Servicios",
  intro:
    "Cada proyecto comienza con una idea. Nosotros la transformamos en una marca con identidad, estrategia y una comunicación visual que conecta.",
  items: [
    {
      title: "Branding e identidad visual",
      description:
        "Creamos marcas con personalidad y propósito. Diseñamos identidades visuales que reflejan la esencia de tu negocio y construyen una presencia coherente, memorable y preparada para crecer.",
      color: "pine",
      image: "/images/servicio-identidad.jpg",
    },
    {
      title: "Diseño web",
      description:
        "Sitios web modernos, funcionales y a la medida, diseñados para ofrecer una gran experiencia y ayudar a que tu marca siga creciendo.",
      color: "lilac",
      image: "/images/servicio-web.jpg",
    },
    {
      title: "Comunicación visual",
      description:
        "Aplicamos la identidad de tu marca en piezas impresas y digitales. Diseñamos materiales que comunican con claridad, fortalecen tu imagen y mantienen una presencia consistente en cualquier formato.",
      color: "chartreuse",
      image: "/images/servicio-direccion.jpg",
    },
    {
      title: "Redes sociales",
      description:
        "Creamos contenido visual y estrategias para redes sociales que fortalecen tu marca, conectan con tu audiencia y mantienen una comunicación auténtica y consistente.",
      color: "blush",
      image: "/images/servicio-contenido.jpg",
    },
  ],
};

export const about = {
  eyebrow: "El estudio",
  title: "Diseñamos como si cada marca fuera nuestra.",
  paragraphs: [
    "En Studio Cromatik trabajamos de forma cercana, creativa y estratégica. Nos involucramos en cada proyecto para construir identidades auténticas que reflejen la esencia de cada negocio y lo ayuden a crecer.",
    "Creemos en los procesos claros, las ideas bien pensadas y el diseño que realmente aporta valor. Nos apasiona ayudar a emprendedores, empresas y marcas personales a construir una identidad visual sólida y coherente.",
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
    },
  ],
};

export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos de tu próximo proyecto.",
  intro:
    "Ya sea que estés empezando desde cero o buscando renovar tu marca, estamos listos para crear algo increíble contigo.",
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
