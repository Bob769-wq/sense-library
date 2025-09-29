import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <div class="mt-header-height relative ">
      <a routerLink="/new">
        <img src="/hero-section-1.webp" class="w-full h-full hidden md:block" alt="sense-library" />
        <img src="/hero-section-mobile.webp" alt="sense-library" class="w-full h-full md:hidden" />
      </a>
    </div>
  `,
  styles: ``,
})
export class HeroSection {}
