import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ProductItem {
  id: number;
  title: string;
  price: string;
  link: string;
  img: string;
  img2: string;
}
@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col flex-wrap h-full text-center">
      <div class="mb-2.5">
        <a [routerLink]="product().link" class="relative group block">
          <img
            [src]="product().img"
            class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            [alt]="product().title"
          />
          <img
            [src]="product().img2"
            class="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            [alt]="product().title"
          />
          <a
            [routerLink]="product().link"
            class="absolute bottom-2 left-2 right-2 bg-black opacity-0 group-hover:opacity-100 duration-300"
          >
            <p class="text-white text-center py-2">加入購物車</p>
          </a>
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
