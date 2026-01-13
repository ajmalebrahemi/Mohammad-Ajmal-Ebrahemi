import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutPoints = [
    {
      icon: '💡',
      title: 'Problem Solver',
      description: 'I thrive on tackling complex challenges and finding elegant solutions.'
    },
    {
      icon: '🚀',
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks to deliver cutting-edge solutions.'
    },
    {
      icon: '✨',
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable code that stands the test of time.'
    },
    {
      icon: '🤝',
      title: 'Client First',
      description: 'Your success is my priority. I ensure clear communication and timely delivery.'
    }
  ];
}

