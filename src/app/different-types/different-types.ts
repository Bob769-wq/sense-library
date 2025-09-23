import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface TypeList {
  id: number;
  title: string;
  img: string;
  link: string;
}
@Component({
  selector: 'app-different-types',
  imports: [RouterLink],
  template: `
    <div class="max-w-8xl mx-auto my-28">
      <div class="flex justify-around items-center flex-wrap">
        @for (item of typeItems; track item.id) {
          <div class="w-auto max-w-2/5 m-5">
            <a [routerLink]="item.link">
              <img [src]="item.img" [alt]="item.title" />
            </a>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class DifferentTypes {
  typeItems: TypeList[] = [
    { id: 1, title: 'new-in', img: '/new-in.webp', link: '/new-in' },
    { id: 2, title: 'final-sale', img: '/final-sale.webp', link: '/new-in' },
    { id: 3, title: 'japan-line', img: '/japan-line.webp', link: '/new-in' },
    { id: 4, title: 'bathroom', img: '/bathroom.webp', link: '/new-in' },
  ];
}
