import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  typedText = '';
  private texts = [
    'Full-Stack Developer',
    'Accurate',
    'Best Quality',
    'Fast',
    'Clean Code',
    'Secure',
    'Scalable Apps'
  ];
  private textIndex = 0;
  private fullText = '';
  private currentIndex = 0;
  private isDeleting = false;
  private typingSpeed = 70;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.fullText = this.texts[this.textIndex];
    this.typeText();
  }

  private typeText(): void {
    // Update fullText to current text in array
    this.fullText = this.texts[this.textIndex];

    if (!this.isDeleting && this.currentIndex < this.fullText.length) {
      // Typing forward
      this.typedText = this.fullText.substring(0, this.currentIndex + 1);
      this.currentIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    } else if (this.isDeleting && this.currentIndex > 0) {
      // Deleting backward
      this.typedText = this.fullText.substring(0, this.currentIndex - 1);
      this.currentIndex--;
      setTimeout(() => this.typeText(), this.typingSpeed / 2);
    } else {
      // Finished typing or deleting, switch state
      this.isDeleting = !this.isDeleting;
      
      if (this.isDeleting) {
        // Just finished typing, wait before deleting
        setTimeout(() => this.typeText(), 2000);
      } else {
        // Just finished deleting, move to next text
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        this.currentIndex = 0;
        setTimeout(() => this.typeText(), 500);
      }
    }
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

  downloadCV(): void {
    // Download resume PDF
    const link = document.createElement('a');
    link.href = 'assets/Mohammad Ajmal Ebrahemi Resume.pdf';
    link.download = 'Mohammad Ajmal Ebrahemi Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  scrollToAbout(): void {
    this.scrollService.scrollToSection('about');
  }
}

