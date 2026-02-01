import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {
  progress = signal(0);
  loadingText = signal('Loading...');
  particles = Array(50).fill(0).map((_, i) => i);

  private loadingMessages = [
    'Loading...',
    'Preparing portfolio...',
    'Loading assets...',
    'Almost there...',
    'Welcome!'
  ];
  private messageIndex = 0;

  ngOnInit(): void {
    this.animateProgress();
    this.animateText();
  }

  private animateProgress(): void {
    const interval = setInterval(() => {
      const current = this.progress();
      if (current < 100) {
        const increment = Math.random() * 15 + 5;
        this.progress.set(Math.min(100, current + increment));
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  private animateText(): void {
    const interval = setInterval(() => {
      this.messageIndex = (this.messageIndex + 1) % this.loadingMessages.length;
      this.loadingText.set(this.loadingMessages[this.messageIndex]);
      
      if (this.progress() >= 100) {
        clearInterval(interval);
        this.loadingText.set('Welcome!');
      }
    }, 400);
  }
}

