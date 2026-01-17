import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  public theme = signal<'light' | 'dark'>('dark');

  constructor() {
    // Load theme from localStorage on initialization
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | null;
    let initialTheme: 'light' | 'dark' = 'dark';
    
    if (savedTheme) {
      initialTheme = savedTheme;
    }
    
    // Set initial theme
    this.theme.set(initialTheme);
    
    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', initialTheme);
    if (!savedTheme) {
      localStorage.setItem(this.THEME_KEY, initialTheme);
    }

    // Apply theme when it changes
    effect(() => {
      const currentTheme = this.theme();
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem(this.THEME_KEY, currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}

