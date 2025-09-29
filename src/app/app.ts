import { Component, HostListener, signal } from '@angular/core';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Crumb } from './crumb/crumb';
import { DifferentTypes } from './different-types/different-types';
import { NewProduct } from './new-product/new-product';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection, Crumb, DifferentTypes, NewProduct, Footer],
  template: `
    <app-header />
    <app-hero-section />
    <app-crumb />
    <app-different-types />
    <app-new-product />
    <app-footer />
    <div
      [class]="
        isScrolled()
          ? 'fixed right-0 bottom-28 bg-black w-11 h-11 flex items-center justify-center cursor-pointer'
          : 'hidden'
      "
      (click)="scrollToTop()"
    >
      <i class="fa-solid fa-chevron-up fa-xl" style="color: #ffffff;"></i>
    </div>
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('sense-library');
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  isScrolled = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 80);
  }
}
