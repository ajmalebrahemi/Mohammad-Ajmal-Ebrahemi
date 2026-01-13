import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  currentIndex = signal(0);

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO',
      company: 'Tech Startup Inc.',
      image: 'https://via.placeholder.com/80/6366f1/ffffff?text=JS',
      text: 'Outstanding work! Delivered exactly what we needed on time and exceeded our expectations. Highly professional and skilled developer.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Digital Solutions',
      image: 'https://via.placeholder.com/80/8b5cf6/ffffff?text=SJ',
      text: 'Working with this developer was a pleasure. Clear communication, attention to detail, and a true understanding of our business needs.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Founder',
      company: 'Innovation Labs',
      image: 'https://via.placeholder.com/80/10b981/ffffff?text=MC',
      text: 'The best developer I\'ve worked with. Technical expertise combined with excellent project management skills. Will definitely hire again!',
      rating: 5
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'CTO',
      company: 'Cloud Services',
      image: 'https://via.placeholder.com/80/ef4444/ffffff?text=ED',
      text: 'Professional, reliable, and incredibly talented. The project was completed flawlessly and ahead of schedule. Highly recommended!',
      rating: 5
    }
  ];

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex()];
  }

  nextTestimonial(): void {
    this.currentIndex.set((this.currentIndex() + 1) % this.testimonials.length);
  }

  prevTestimonial(): void {
    this.currentIndex.set(
      this.currentIndex() === 0 ? this.testimonials.length - 1 : this.currentIndex() - 1
    );
  }

  goToTestimonial(index: number): void {
    this.currentIndex.set(index);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

