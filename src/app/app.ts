import { Component, signal } from '@angular/core';

interface Expertise {
  icon: string;
  title: string;
  description: string;
}

interface TechnologyGroup {
  title: string;
  technologies: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  linkLabel: string;
}

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly isLightTheme = signal(false);
  protected readonly currentYear = new Date().getFullYear();

  protected readonly expertise: Expertise[] = [
    {
      icon: '01',
      title: 'Backend robusto',
      description:
        'APIs e serviços com Java, Kotlin e Spring Boot, construídos para serem seguros, testáveis e fáceis de evoluir.',
    },
    {
      icon: '02',
      title: 'Arquitetura limpa',
      description:
        'Domínio no centro das decisões, com Clean Architecture, DDD, baixo acoplamento e responsabilidades bem definidas.',
    },
    {
      icon: '03',
      title: 'Experiência full-stack',
      description:
        'Integração ponta a ponta com Angular e TypeScript para transformar regras de negócio em produtos completos.',
    },
  ];

  protected readonly technologyGroups: TechnologyGroup[] = [
    {
      title: 'Backend',
      technologies: ['Java', 'Kotlin', 'Spring Boot', 'REST APIs', 'JUnit'],
    },
    {
      title: 'Arquitetura',
      technologies: ['Clean Architecture', 'DDD', 'SOLID', 'Testes automatizados'],
    },
    {
      title: 'Frontend',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'React'],
    },
    {
      title: 'Dados & Cloud',
      technologies: ['PostgreSQL', 'Supabase', 'Docker', 'AWS', 'GitHub Actions'],
    },
  ];

  protected readonly projects: Project[] = [
    {
      name: 'Customer Service',
      description:
        'API Spring Boot que aplica os quatro círculos da Clean Architecture em pacotes de alto nível, mantendo os casos de uso independentes de frameworks.',
      technologies: ['Java', 'Spring Boot', 'Clean Architecture', 'Testes'],
      url: 'https://github.com/cafpaiva/customer-service',
      linkLabel: 'Ver repositório',
    },
    {
      name: 'Portfólio pessoal',
      description:
        'Experiência web responsiva construída com Angular para apresentar projetos, competências e a forma como transformo problemas em software.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
      url: 'https://github.com/cafpaiva',
      linkLabel: 'Ver GitHub',
    },
  ];

  protected toggleTheme(): void {
    const lightThemeEnabled = !this.isLightTheme();
    this.isLightTheme.set(lightThemeEnabled);
    document.documentElement.dataset['theme'] = lightThemeEnabled ? 'light' : 'dark';
  }
}
