export interface Curso { nombre: string; detalle: string; }
export interface GrupoStack { categoria: string; items: string[]; }

export const PERFIL = {
  nombre: 'Hanssell José Cerda Woo',
  titulo: 'Desarrollador Full-Stack · Mentor Tecnológico',
  credenciales: ['Ingeniero de Sistemas', 'Mentor académico'],
  resumen: [
    'Diseño, construyo e implemento soluciones web, móviles y empresariales. Trabajo principalmente con Angular, Flutter, Spring Boot y PostgreSQL, creando productos escalables, seguros y enfocados en resolver necesidades reales del negocio.',
    'Tengo experiencia en sistemas de facturación, inventario, puntos de venta, aplicaciones financieras, integración de APIs, generación de reportes y automatización de procesos. También uso Docker, n8n, inteligencia artificial y servicios en la nube para optimizar operaciones y facilitar el despliegue.',
    'Me caracterizo por el aprendizaje continuo y la capacidad de convertir problemas complejos en soluciones prácticas, con visión de producto y compromiso con la calidad.',
  ],
  contacto: {
    correo: 'cerdawoohans@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hanssell-josé-cerda-woo-42594a112',
    github: 'https://github.com/hanscerdawoo',
    whatsapp: 'https://wa.me/50585212507',
    telefono: '+505 8521-2507',
  },
};

export const STACK: GrupoStack[] = [
  { categoria: 'Frontend y móvil', items: ['Angular', 'Flutter'] },
  { categoria: 'Backend', items: ['Spring Boot', 'APIs REST'] },
  { categoria: 'Datos', items: ['PostgreSQL'] },
  { categoria: 'Automatización e IA', items: ['n8n', 'Inteligencia artificial'] },
  { categoria: 'Infraestructura', items: ['Docker', 'Servicios en la nube'] },
];

export const MENTORIA = {
  intro: 'Acompaño a estudiantes, emprendedores y equipos a transformar ideas en productos mínimos viables, funcionales y preparados para crecer.',
  hackatones: [
    { anio: '2025', detalle: 'Mentor de developers, categoría Startup' },
    { anio: '2026', detalle: 'Mentor de developers, categoría Startup' },
  ],
  cursos: [
    { nombre: 'Automatización de agentes con n8n', detalle: 'Curso impartido' },
    { nombre: 'Desarrollo Frontend multiplataforma con Flutter', detalle: 'Curso impartido' },
  ] as Curso[],
};
