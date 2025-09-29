import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
interface NavList {
  id: number;
  title: string;
  link: string;
  children?: NavList[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <header class="bg-white fixed top-0 left-0 right-0 z-50">
      <div class="px-25 py-2.5 w-full max-w-1680 mx-auto flex justify-between items-center">
        <div>
          <a routerLink="/" class="max-w-header-logo-width">
            <img src="/logo-header.webp" class="max-w-header-logo-width w-full" alt="logo" />
          </a>
        </div>
        <div class="justify-start flex-1">
          <ul class="screen-min-w-992:flex pl-5 hidden">
            @for (item of navItems; track item.id) {
              @if (item.children && item.children.length > 0) {
                <li class="text-xs flex group">
                  <a [routerLink]="item.link" class="inline-block p-4 pr-5">
                    {{ item.title }}
                    <i class="fa-solid fa-chevron-down fa-sm" style="color: #000000;"></i>
                  </a>
                  <div
                    class="fixed top-16 left-0 right-0 bg-white shadow-lg z-40
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible
                              transition-all duration-300 ease-in-out"
                  >
                    <div class="py-25 px-[20vw]">
                      <div class="flex ">
                        @for (child of item.children; track child.id) {
                          <a [routerLink]="child.link" class="block p-3">
                            <div class="text-sm font-medium text-gray-900">{{ child.title }}</div>
                          </a>
                        }
                      </div>
                    </div>
                  </div>
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

        <ul class="flex items-center">
          <li class="px-2 cursor-pointer hidden screen-min-w-992:block" (click)="toggleSearchBar()">
            <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #000000;"></i>
          </li>
          <div
            class="transition-opacity duration-300 ease-in-out"
            [class]="isSearchBarOpen() ? 'fixed inset-0 bg-black bg-opacity-50 z-[9999]' : 'hidden'"
            (click)="toggleSearchBar()"
          ></div>
          <div
            class="transition-all duration-300 ease-in-out"
            [class]="isSearchBarOpen() ? 'fixed top-0 right-0 left-0 bg-white z-[10000]' : 'hidden'"
          >
            <div class="flex justify-center p-2.5 relative">
              <form class="max-w-80% w-full flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="32"
                    viewBox="0 0 640 640"
                  >
                    <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                      fill="#000000"
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="搜尋"
                  class="py-16 px-8 outline-none text-2xl w-full"
                />
              </form>
              <div
                class="text-2xl absolute right-8 top-8 cursor-pointer"
                (click)="toggleSearchBar()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 640 640"
                >
                  <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="#000000"
                    d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <li class="px-2 cursor-pointer">
            <i
              class="fa-regular fa-user fa-lg hidden screen-min-w-992:block"
              style="color: #000000;"
            ></i>
            <i class="fa-regular fa-user fa-xl screen-min-w-992:hidden" style="color: #000000;"></i>
          </li>
          <li class="px-2 cursor-pointer" (click)="toggleCart()">
            <i
              class="fa-solid fa-bag-shopping fa-lg hidden screen-min-w-992:block"
              style="color: #000000;"
            ></i>
            <i
              class="fa-solid fa-bag-shopping fa-xl screen-min-w-992:hidden"
              style="color: #000000;"
            ></i>
          </li>
          <li class="px-2 cursor-pointer" (click)="toggleMenu()">
            <i class="fa-solid fa-bars fa-xl screen-min-w-992:hidden" style="color: #000000;"></i>
          </li>
        </ul>
      </div>
    </header>

    <div
      class="fixed top-0 right-0 h-full w-80 bg-white z-50 overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="isMenuOpen() ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col">
        <div class="flex justify-end p-4">
          <div class="shadow-xl  rounded-full p-3" (click)="toggleMenu()">
            <i
              class="fa-solid fa-xmark flex items-center justify-center"
              style="color: #000000;"
            ></i>
          </div>
        </div>
        <ul>
          <div class="border-b py-5 px-6 ">
            <form class="relative" [formGroup]="form" (submit)="submit()">
              <input type="text" placeholder="搜尋" class="w-full pl-2.5 pr-9 py-1" />
              <button class="absolute top-1 right-1">
                <i class="fa-solid fa-magnifying-glass fa-sm" style="color: #000000;"></i>
              </button>
            </form>
          </div>
          @for (item of menuItems; track item.id) {
            @if (item.children && item.children.length > 0) {
              <li class="border-b ">
                <div class="flex justify-between items-center">
                  <a class="inline-block py-5 px-6">{{ item.title }}</a>
                  <div
                    class="border border-black flex justify-center items-center w-8 h-8 mr-5 cursor-pointer"
                    (click)="toggleExpanded(item)"
                  >
                    <span>{{ item.isExpanded ? '-' : '+' }}</span>
                  </div>
                </div>
                @if (item.isExpanded) {
                  <ul>
                    @for (child of item.children; track child.id) {
                      <li class="cursor-pointer">
                        <a class="inline-block py-5 px-6" [routerLink]="child.link">{{
                          child.title
                        }}</a>
                      </li>
                    }
                  </ul>
                }
              </li>
            } @else {
              <li class="border-b">
                <a class="inline-block py-5 px-6">{{ item.title }}</a>
              </li>
            }
          }
        </ul>
      </div>
    </div>

    <div
      class="transition-all duration-500"
      [class]="
        isCartOpen()
          ? 'fixed top-header-height bottom-0 md:bottom-[10vh] right-0 left-0 bg-white shadow-xl z-[10000]'
          : 'h-0'
      "
    >
      <div class="p-5 max-w-1000 mx-auto">
        <div class="flex justify-end mb-10">
          <span class="cursor-pointer" (click)="toggleCart()">
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="#000000"
                d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
              />
            </svg>
          </span>
        </div>
        <h2 class="text-center text-3xl mb-6">您的購物車目前還是空的</h2>
        <div class="flex justify-center">
          <a class="text-white bg-button-bg hover:bg-button-hover px-9 py-2.5">繼續購物</a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Header {
  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  toggleExpanded(item: NavList) {
    if (item.children && item.children.length > 0) {
      item.isExpanded = !item.isExpanded;
    }
  }

  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control('', {
      validators: [Validators.required],
    }),
  });

  submit() {
    const data = this.form.getRawValue();
    data.searchControl = data.searchControl.trim();
    this.form.patchValue(data);
    if (this.form.invalid) {
      console.error('錯誤');
      return;
    }

    console.log(data);
  }

  isSearchBarOpen = signal(false);
  toggleSearchBar() {
    this.isSearchBarOpen.update((value) => !value);
  }
  isCartOpen = signal(false);
  toggleCart() {
    this.isCartOpen.update((value) => !value);
  }
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
  menuItems: NavList[] = [
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
    { id: 5, title: '登入', link: '/log-in' },
    { id: 6, title: '註冊', link: '/sign-in' },
  ];
}
