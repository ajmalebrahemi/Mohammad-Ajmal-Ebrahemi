import { Component, signal, computed, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  activeCategory = signal<'all' | 'frontend' | 'backend' | 'tools'>('all');

  skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 95, icon: '⚡', category: 'frontend' },
    { name: 'React', level: 90, icon: '⚛️', category: 'frontend' },
    { name: 'TypeScript', level: 92, icon: '📘', category: 'frontend' },
    { name: 'JavaScript', level: 95, icon: '🟨', category: 'frontend' },
    { name: 'HTML/CSS', level: 98, icon: '🎨', category: 'frontend' },
    { name: 'SCSS/SASS', level: 90, icon: '💅', category: 'frontend' },
    { name: 'RxJS', level: 85, icon: '🔄', category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, icon: '🌊', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 90, icon: '🟢', category: 'backend' },
    { name: 'Express.js', level: 88, icon: '🚂', category: 'backend' },
    { name: 'MongoDB', level: 85, icon: '🍃', category: 'backend' },
    { name: 'PostgreSQL', level: 82, icon: '🐘', category: 'backend' },
    { name: 'REST APIs', level: 92, icon: '🔌', category: 'backend' },
    { name: 'GraphQL', level: 80, icon: '📊', category: 'backend' },
    { name: 'Firebase', level: 85, icon: '🔥', category: 'backend' },
    
    // Tools
    { name: 'Git', level: 90, icon: '📦', category: 'tools' },
    { name: 'Docker', level: 75, icon: '🐳', category: 'tools' },
    { name: 'AWS', level: 70, icon: '☁️', category: 'tools' },
    { name: 'CI/CD', level: 80, icon: '🔄', category: 'tools' },
    { name: 'Webpack', level: 85, icon: '📦', category: 'tools' },
    { name: 'Jest', level: 82, icon: '🧪', category: 'tools' }
  ];

  visibleSkills = computed(() => {
    const category = this.activeCategory();
    if (category === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === category);
  });

  setCategory(category: 'all' | 'frontend' | 'backend' | 'tools'): void {
    this.activeCategory.set(category);
  }

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    if (this.skillsSection) {
      const elements = this.skillsSection.nativeElement.querySelectorAll('.animate-on-scroll');
      this.scrollAnimationService.observeElements(elements);
    }
  }
}

