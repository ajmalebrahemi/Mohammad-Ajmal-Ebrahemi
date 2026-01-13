import { Component, OnInit, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { FloatingHireButtonComponent } from './components/floating-hire-button/floating-hire-button.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    FloatingHireButtonComponent,
    PreloaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading = signal(true);

  constructor(public themeService: ThemeService) {
    // Apply theme on initialization
    effect(() => {
      const theme = this.themeService.theme();
      document.documentElement.setAttribute('data-theme', theme);
    });
  }

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }
}

