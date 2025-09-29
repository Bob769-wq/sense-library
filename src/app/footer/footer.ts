import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="pt-7 pb-5 px-12 max-w-1400 mx-auto">
        <div
          class="-ml-12 flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start"
        >
          <div class="md:w-1/2 pl-12 text-center md:text-left mb-12">
            <a routerLink="/" class="inline-block max-w-footer-logo-width">
              <img src="/logo-footer.webp" class="w-full h-auto" alt="logo" />
            </a>
            <p class="text-xs mb-2.5 text-center md:text-left">
              Copyright © {{ 2020 }} E-commerce Powered by <a routerLink="/easystore">EasyStore</a>
            </p>
            <p class="text-xs mb-2.5 text-center md:text-left">
              質物圖鑑商行 87417975<br />
              地址：桃園市平鎮區大勇街2巷3弄1號
            </p>
          </div>
          <div class="md:w-1/2 pl-12">
            <ul class="flex">
              <li class="mr-5 mb-5">
                <a href="/facebook"
                  ><i class="fa-brands fa-square-facebook fa-xl" style="color: #000000;"></i
                ></a>
              </li>
              <li class="mr-5 mb-5">
                <a href="/instagram"
                  ><i class="fa-brands fa-instagram fa-xl" style="color: #000000;"></i
                ></a>
              </li>
              <li class="mr-5 mb-5">
                <a href="/line"><i class="fa-brands fa-line fa-xl" style="color: #000000;"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="-ml-4 flex justify-center gap-2 mt-12 mb-6">
          <li>
            <i class="fa-brands fa-cc-visa fa-2xl" style="color: #555555;"></i>
          </li>
          <li>
            <i class="fa-brands fa-cc-mastercard fa-2xl" style="color: #555555;"></i>
          </li>
          <li>
            <i class="fa-brands fa-cc-amex fa-2xl" style="color: #555555;"></i>
          </li>
          <li>
            <i class="fa-brands fa-cc-jcb fa-2xl" style="color: #555555;"></i>
          </li>
        </ul>
      </div>
    </footer>
  `,
  styles: ``,
})
export class Footer {}
