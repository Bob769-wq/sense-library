import { Component, signal } from '@angular/core';
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
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('sense-library');
}
