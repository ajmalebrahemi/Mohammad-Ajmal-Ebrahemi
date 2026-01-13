import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  workSteps: WorkStep[] = [
    {
      icon: '📋',
      title: 'Requirement Analysis',
      description: 'I start by understanding your needs, goals, and target audience to create a comprehensive project plan.'
    },
    {
      icon: '🎨',
      title: 'Design & Planning',
      description: 'Creating wireframes, mockups, and architecture plans to ensure the solution meets your vision.'
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Building your project with clean, maintainable code following best practices and industry standards.'
    },
    {
      icon: '🧪',
      title: 'Testing & Quality',
      description: 'Rigorous testing to ensure functionality, performance, and compatibility across all platforms.'
    },
    {
      icon: '🚀',
      title: 'Deployment & Support',
      description: 'Smooth deployment and ongoing support to ensure your project runs flawlessly in production.'
    }
  ];
}

