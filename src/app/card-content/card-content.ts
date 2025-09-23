import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ProductItem {
  id: number;
  title: string;
  price: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col flex-wrap h-full text-center">
      <div class="mb-2.5">
        <a [routerLink]="product().link">
          <img [src]="product().img" class="w-full h-full object-cover" [alt]="product().title" />
        </a>
      </div>
      <a [routerLink]="product().link">
        <p class="text-base mb-1">{{ product().title }}</p>
        <p>{{ product().price }}</p>
      </a>
    </div>
  `,
  styles: ``,
})
export class CardContent {
  product = input.required<ProductItem>();
}
