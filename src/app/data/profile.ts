export interface Curso { nombre: string; detalle: string; }
export interface GrupoStack { categoria: string; items: string[]; }

export const PERFIL = {
  nombre: 'Hanssell José Cerda Woo',
  titulo: 'Desarrollador Full-Stack · Mentor Tecnológico',
  credenciales: ['Ingeniero de Sistemas', 'Mentor académico'],
  resumen: [
    'Soy Ingeniero de Sistemas y desarrollador de aplicaciones full-stack, especializado en el diseño, la construcción y la implementación de soluciones web, móviles y empresariales. Mi trabajo se centra en Angular, Flutter, Spring Boot y bases de datos relacionales como PostgreSQL, MySQL y MariaDB, con el propósito de entregar productos escalables, seguros y alineados con las necesidades reales del negocio.',
    'He desarrollado sistemas de facturación, inventario y puntos de venta, aplicaciones financieras, integraciones con APIs y módulos de reportes. Complemento el desarrollo con la automatización de procesos y el uso de Docker, n8n, inteligencia artificial y servicios en la nube, para mejorar la productividad de las operaciones y simplificar el despliegue de las aplicaciones.',
    'Además del desarrollo, ejerzo como mentor académico y formador tecnológico. Acompaño a estudiantes, emprendedores y equipos en la creación y optimización de productos digitales, y he participado como mentor en hackatones e iniciativas de innovación, ayudando a convertir ideas en productos mínimos viables, funcionales y preparados para crecer.',
    'Me distingo por el aprendizaje continuo, el análisis riguroso de problemas complejos y la capacidad de traducirlos en soluciones prácticas. Busco integrarme a proyectos y equipos que valoren la innovación, la colaboración y el impacto de la tecnología, aportando experiencia técnica, visión de producto y un firme compromiso con la calidad.',
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
  { categoria: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'MariaDB'] },
  { categoria: 'Automatización e IA', items: ['n8n', 'Inteligencia artificial'] },
  { categoria: 'Infraestructura', items: ['Docker', 'Servicios en la nube'] },
];

export const MENTORIA = {
  intro: 'Acompaño a estudiantes, emprendedores y equipos a transformar ideas en productos mínimos viables, funcionales y preparados para crecer.',
  hackatones: [
    { anio: '2025', detalle: 'Mentor de developers, categoría Startup' },
    { anio: '2026', detalle: 'Mentor de developers' },
  ],
  cursos: [
    { nombre: 'Automatización de agentes con n8n', detalle: 'Curso impartido' },
    { nombre: 'Desarrollo Frontend multiplataforma con Flutter', detalle: 'Curso impartido' },
  ] as Curso[],
};
