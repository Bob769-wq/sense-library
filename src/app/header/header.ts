import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface NavList {
  id: number;
  title: string;
  link: string;
  children?: NavList[];
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="bg-white fixed top-0 left-0 right-0">
      <div class="px-6.1 py-2.5 w-full max-w-xxl flex justify-between items-center">
        <div>
          <a routerLink="/" class="max-w-logo">
            <img src="/logo-header.webp" class="max-w-logo w-full" alt="logo" />
          </a>
        </div>
        <div class="justify-start flex-1">
          <ul class="flex pl-5">
            @for (item of navItems; track item.id) {
              @if (item.children && item.children.length > 0) {
                <li class="text-xs flex">
                  <a [routerLink]="item.link" class="inline-block p-4 pr-5">
                    {{ item.title }}
                    <i class="fa-solid fa-chevron-down fa-sm" style="color: #000000;"></i>
                  </a>
                </li>
              } @else {
                <li class="text-xs" [class.font-bold]="item.title === '首頁'">
                  <a [routerLink]="item.link" class="inline-block p-4">
                    {{ item.title }}
                  </a>
                </li>
              }
            }
          </ul>
        </div>
        <div class="">
          <ul class="flex items-center">
            <li class="px-2">
              <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #000000;"></i>
            </li>
            <li class="px-2"><i class="fa-regular fa-user fa-lg" style="color: #000000;"></i></li>
            <li class="px-2">
              <i class="fa-solid fa-bag-shopping fa-lg" style="color: #000000;"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: ``,
})
export class Header {
  navItems: NavList[] = [
    { id: 1, title: '首頁', link: '/' },
    {
      id: 2,
      title: '所有商品',
      link: '/products',
      children: [
        {
          id: 1,
          title: '展場限定',
          link: '/limited',
        },
        {
          id: 2,
          title: '專屬客製',
          link: '/customized',
        },
        {
          id: 3,
          title: '日貨專區',
          link: '/japan',
        },
        {
          id: 4,
          title: '衛浴專區',
          link: '/bath',
        },
        {
          id: 5,
          title: 'SALE! 專區',
          link: '/sale',
        },
        {
          id: 6,
          title: '瑕疵專區',
          link: '/flaw',
        },
      ],
    },
    {
      id: 3,
      title: '購買須知',
      link: '/know',
      children: [
        {
          id: 1,
          title: '客製化商品訂購須知',
          link: '',
        },
      ],
    },
    { id: 4, title: '退換貨須知', link: '/change' },
  ];
}
