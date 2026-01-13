import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeFilter = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+App',
      tech: ['React', 'Firebase', 'TypeScript'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'REST API Service',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=API+Service',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Interactive analytics dashboard with real-time data visualization and reporting.',
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Dashboard',
      tech: ['Angular', 'D3.js', 'Chart.js', 'REST API'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Modern social media platform with posts, comments, likes, and real-time notifications.',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Social+App',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Enterprise-grade microservices system with API gateway and service discovery.',
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Microservices',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}

