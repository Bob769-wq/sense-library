import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crumb',
  imports: [RouterLink],
  template: `
    <div class="p-25 max-w-1200 my-12 md:my-28 mx-auto">
      <div class="flex flex-col md:flex-row md:justify-center md:items-center">
        <div class="w-full md:w-1/2 md:pl-12">
          <a routerLink="/1000">
            <img src="/free-shipping.webp" class="max-w-full h-auto" alt="free" />
          </a>
        </div>
        <div class="w-full md:w-1/2 py-5 md:pl-12">
          <h3 class="mb-25 text-2xl">
            <a routerLink="/1000">消費滿1000免運</a>
          </h3>
          <p class="text-xs">單筆消費滿NTD.1000全台免運，非台灣地區請聯絡客服估計運費</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Crumb {}
