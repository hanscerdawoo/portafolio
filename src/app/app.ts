import { Component, HostListener, computed, effect, signal } from '@angular/core';
import { MENTORIA, PERFIL, STACK } from './data/profile';
import { PROYECTOS } from './data/projects';

type Tema = 'light' | 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly perfil = PERFIL;
  protected readonly stack = STACK;
  protected readonly mentoria = MENTORIA;
  protected readonly proyectos = PROYECTOS;
  protected readonly anio = new Date().getFullYear();

  protected readonly menuAbierto = signal(false);
  protected readonly filtro = signal('Todos');
  protected readonly tema = signal<Tema>(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  protected readonly tecnologias = computed(() => [
    'Todos',
    ...new Set(this.proyectos.flatMap((p) => p.tecnologias)),
  ]);
  protected readonly visibles = computed(() =>
    this.filtro() === 'Todos'
      ? this.proyectos
      : this.proyectos.filter((p) => p.tecnologias.includes(this.filtro())),
  );

  protected readonly secciones = [
    { id: 'inicio', nombre: 'Inicio', icono: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10' },
    { id: 'sobre-mi', nombre: 'Sobre mí', icono: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0' },
    { id: 'stack', nombre: 'Stack tecnológico', icono: 'M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14' },
    { id: 'proyectos', nombre: 'Proyectos', icono: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z' },
    { id: 'mentoria', nombre: 'Mentoría y formación', icono: 'M12 4L2 9l10 5 10-5-10-5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5' },
    { id: 'contacto', nombre: 'Contacto', icono: 'M4 6h16v12H4zM4 7l8 6 8-6' },
  ];

  constructor() {
    effect(() => {
      const oscuro = this.tema() === 'dark';
      document.documentElement.classList.toggle('dark', oscuro);
      document.body.classList.toggle('overflow-hidden', this.menuAbierto());
    });
  }

  @HostListener('document:keydown.escape')
  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }

  protected cambiarTema(): void {
    const nuevo: Tema = this.tema() === 'dark' ? 'light' : 'dark';
    this.tema.set(nuevo);
    try { localStorage.setItem('tema', nuevo); } catch { /* sin almacenamiento */ }
  }

  protected zip(repo: string): string {
    return `${repo.replace(/\/$/, '')}/archive/refs/heads/main.zip`;
  }
}
