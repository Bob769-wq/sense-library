import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <a routerLink="/new" class="inline-block mt-header">
      <img src="/hero-section-1.webp" class="w-full h-full" alt="sense-library" />
    </a>
  `,
  styles: ``,
})
export class HeroSection {}
