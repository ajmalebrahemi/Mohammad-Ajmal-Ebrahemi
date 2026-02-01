import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer?: IntersectionObserver;
  private observedElements = new Set<Element>();

  constructor() {
    this.initObserver();
  }

  private initObserver(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Unobserve after animation to improve performance
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);
  }

  observeElement(element: Element): void {
    if (element && !this.observedElements.has(element)) {
      this.observer?.observe(element);
      this.observedElements.add(element);
    }
  }

  observeElements(elements: NodeListOf<Element> | Element[]): void {
    elements.forEach(el => this.observeElement(el));
  }

  destroy(): void {
    this.observedElements.forEach(el => {
      this.observer?.unobserve(el);
    });
    this.observedElements.clear();
  }
}
