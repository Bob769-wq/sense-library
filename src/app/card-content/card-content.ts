import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ProductItem {
  id: number;
  title: string;
  price: string;
  link: string;
  img: string;
  img2: string;
  discount?: boolean;
}
@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col flex-wrap text-center">
      <div class="mb-2.5 aspect-square w-full relative overflow-hidden">
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
            class="absolute bottom-2 left-2 right-2 bg-black opacity-0 group-hover:opacity-100 duration-300  screen-min-w-992:block hidden"
          >
            <p class="text-white text-center py-2">加入購物車</p>
          </a>
        </a>
        @if (product().discount) {
          <div class="absolute left-0 top-3 bg-black text-white text-xs px-4 py-1">優惠</div>
        }
      </div>
      <a [routerLink]="product().link" class="inline-block p-3 screen-min-w-992:p-0">
        <p class="text-base mb-1 min-h-12">{{ product().title }}</p>
        <p>{{ product().price }}</p>
      </a>
      <button class="screen-min-w-992:hidden text-xs border border-black py-2 bg-white">
        加入購物車
      </button>
    </div>
  `,
  styles: ``,
})
export class CardContent {
  product = input.required<ProductItem>();
}
