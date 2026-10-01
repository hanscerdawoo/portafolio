import { Component, computed, signal } from '@angular/core';
import { MENTORIA, PERFIL, STACK } from './data/profile';
import { PROYECTOS } from './data/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly perfil = PERFIL;
  protected readonly stack = STACK;
  protected readonly mentoria = MENTORIA;
  protected readonly proyectos = PROYECTOS;
  protected readonly anio = new Date().getFullYear();

  protected readonly menuAbierto = signal(false);
  protected readonly filtro = signal('Todos');

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
    { id: 'sobre-mi', nombre: 'Sobre mí' },
    { id: 'stack', nombre: 'Stack' },
    { id: 'proyectos', nombre: 'Proyectos' },
    { id: 'mentoria', nombre: 'Mentoría' },
    { id: 'contacto', nombre: 'Contacto' },
  ];

  protected zip(repo: string): string {
    return `${repo.replace(/\/$/, '')}/archive/refs/heads/main.zip`;
  }
}
