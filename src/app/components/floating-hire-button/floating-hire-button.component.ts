import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-floating-hire-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-hire-button.component.html',
  styleUrl: './floating-hire-button.component.scss'
})
export class FloatingHireButtonComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }
}

