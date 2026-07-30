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
  title: "Creamos marcas con intención.",
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
  intro:
    "#",
  items: [
    {
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-1.jpg",
    },
    {
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-2.jpg",
    },
    {
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-3.jpg",
    },
	{
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-4.jpg",
    },
	{
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-5.jpg",
    },
	{
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-6.jpg",
    },
	{
      client: "Ami Estilo",
      project: "Nombre del proyecto",
      image: "/images/trabajo-7.jpg",
    },
	{
      client: "DC Arquitectura & Diseño",
      project: "Nombre del proyecto",
      image: "/images/trabajo-8.jpg",
    },
	{
      client: "DC Arquitectura & Diseño",
      project: "Nombre del proyecto",
      image: "/images/trabajo-9.jpg",
    },
	{
      client: "DC Arquitectura & Diseño",
      project: "Nombre del proyecto",
      image: "/images/trabajo-10.jpg",
    },
	{
      client: "DC Arquitectura & Diseño",
      project: "Nombre del proyecto",
      image: "/images/trabajo-11.jpg",
    },
	{
      client: "DC Arquitectura & Diseño",
      project: "Nombre del proyecto",
      image: "/images/trabajo-12.jpg",
    },
  ],
};

export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos de tu próximo proyecto.",
  intro:
    "Ya sea que estés empezando desde cero o buscando renovar tu marca, estamos listos para crear algo increíble contigo.",
  email: "studiocromatika@gmail.com",
  phone: "+52 772 106",
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
