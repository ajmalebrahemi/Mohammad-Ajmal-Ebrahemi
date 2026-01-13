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
  private fullText = 'Full Stack Developer';
  private currentIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.typeText();
  }

  private typeText(): void {
    if (!this.isDeleting && this.currentIndex < this.fullText.length) {
      this.typedText = this.fullText.substring(0, this.currentIndex + 1);
      this.currentIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    } else if (this.isDeleting && this.currentIndex > 0) {
      this.typedText = this.fullText.substring(0, this.currentIndex - 1);
      this.currentIndex--;
      setTimeout(() => this.typeText(), this.typingSpeed / 2);
    } else {
      this.isDeleting = !this.isDeleting;
      if (!this.isDeleting) {
        this.currentIndex = 0;
      }
      setTimeout(() => this.typeText(), this.isDeleting ? 2000 : 500);
    }
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

  downloadCV(): void {
    // Create a placeholder CV download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'CV.pdf';
    link.click();
    // In production, replace with actual CV file path
    console.log('CV download triggered - replace with actual CV file');
  }

  scrollToAbout(): void {
    this.scrollService.scrollToSection('about');
  }
}

