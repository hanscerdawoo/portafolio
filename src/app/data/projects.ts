export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  /** Repositorio público en GitHub */
  repo: string;
  /** Opcional: demo en línea */
  demo?: string;
  /** Opcional: imagen en public/img/proyectos/ (ej. 'img/proyectos/mi-app.webp') */
  imagen?: string;
}

/**
 * Para publicar un proyecto nuevo, agrega un objeto a esta lista.
 * La descarga apunta automáticamente al ZIP de la rama main del repo.
 *
 * {
 *   titulo: 'Nombre del proyecto',
 *   descripcion: 'Qué problema resuelve.',
 *   tecnologias: ['Angular', 'Spring Boot'],
 *   repo: 'https://github.com/hanscerdawoo/mi-repo',
 * }
 */
export const PROYECTOS: Proyecto[] = [];
