import { Component } from '@angular/core';
import { CardContent } from '../card-content/card-content';
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
  selector: 'app-new-product',
  imports: [CardContent],
  template: `
    <div class="max-w-1400 mx-auto my-12 md:my-28 px-6 md:px-12">
      <h2 class="text-center mb-25 text-2xl">新品上市</h2>
      <div class="pt-2.5 pb-8 grid grid-cols-1 md:grid-cols-2 screen-min-w-992:grid-cols-3 gap-12">
        @for (item of productItems; track item.id) {
          <app-card-content [product]="item" />
        }
      </div>
      <div class="pt-2.5 pb-8 grid grid-cols-1 md:grid-cols-2 screen-min-w-992:flex justify-center">
        @for (item of flawItems; track item.id) {
          <div class="pl-12 mb-12 screen-min-w-992:w-1/3">
            <app-card-content [product]="item" />
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class NewProduct {
  productItems: ProductItem[] = [
    {
      id: 1,
      title: '【高級客製磁吸盒】 絲絨珠寶盒(大)＋行李吊牌＋髮圈',
      price: 'NT$ 1,799',
      link: '/product1',
      img: '/product1-1.webp',
      img2: '/product1-2.webp',
    },
    {
      id: 2,
      title: '【高級客製磁吸盒】 絲絨珠寶盒(小)＋行李吊牌＋髮圈 三件組禮盒',
      price: 'NT$ 1,599',
      link: '/product2',
      img: '/product2-1.webp',
      img2: '/product2-2.webp',
    },
    {
      id: 3,
      title: '【專屬客製】絲絨珠寶盒 (大) ＋梳子 寵愛二件組禮盒',
      price: 'NT$ 1,299',
      link: '/product3',
      img: '/product3-1.webp',
      img2: '/product3-2.webp',
    },
    {
      id: 4,
      title: '【專屬客製】奢華印記 絲絨珠寶禮盒 (大)',
      price: 'NT$ 1,099',
      link: '/product4',
      img: '/product4-1.webp',
      img2: '/product4-2.webp',
    },
    {
      id: 5,
      title: '【專屬客製】絲絨珠寶盒(小)+ 梳子禮盒',
      price: 'NT$ 1,050',
      link: '/product5',
      img: '/product5-1.webp',
      img2: '/product5-2.webp',
    },
    {
      id: 6,
      title: '【專屬客製】奢藏記憶 絲絨珠寶盒(小) 禮盒',
      price: 'NT$ 850',
      link: '/product6',
      img: '/product6-1.webp',
      img2: '/product6-2.webp',
    },
    {
      id: 7,
      title: '【專屬客製】訂做心意 美妝旅行三件組禮盒',
      price: 'NT$ 850',
      link: '/product7',
      img: '/product7-1.webp',
      img2: '/product7-2.webp',
    },
    {
      id: 8,
      title: '【專屬客製】妝點密語 客製珠光化妝包禮盒',
      price: '從NT$ 499起',
      link: '/product8',
      img: '/product8-1.webp',
      img2: '/product8-2.webp',
    },
    {
      id: 9,
      title: '【專屬客製】收藏時光 皮質隨身飾品盒',
      price: 'NT$ 450',
      link: '/product9',
      img: '/product9-1.webp',
      img2: '/product9-2.webp',
    },
    {
      id: 10,
      title: '【專屬客製】結髮一輩子 隨身小巧氣墊梳禮盒',
      price: 'NT$ 230',
      link: '/product10',
      img: '/product10-1.webp',
      img2: '/product10-2.webp',
    },
    {
      id: 11,
      title: '【專屬客製】我的甜甜圈 客製姓名髮圈禮盒',
      price: 'NT$ 230',
      link: '/product11',
      img: '/product11-1.webp',
      img2: '/product11-2.webp',
    },
    {
      id: 12,
      title: '【專屬客製】閃耀旅途 客製燙金行李吊牌',
      price: 'NT$ 399',
      link: '/product12',
      img: '/product12-1.webp',
      img2: '/product12-2.webp',
    },
    {
      id: 13,
      title: '【專屬客製】繫住我 傘繩多用防丟鏈',
      price: '從NT$ 275起',
      link: '/product13',
      img: '/product13-1.webp',
      img2: '/product13-2.webp',
    },
    {
      id: 14,
      title: '【專屬客製】旅人標籤 刻字真皮護照小吊牌',
      price: '從NT$ 45起',
      link: '/product14',
      img: '/product14-1.webp',
      img2: '/product14-2.webp',
    },
    {
      id: 15,
      title: '【專屬客製】你的名字 實木拼金屬名片盒',
      price: '從NT$ 390起',
      link: '/product15',
      img: '/product15-1.webp',
      img2: '/product15-2.webp',
    },
    {
      id: 16,
      title: '【加購禮盒】實木金屬名片盒 禮盒',
      price: '從NT$ 30起',
      link: '/product16',
      img: '/product16-1.webp',
      img2: '/product16-2.webp',
    },
    {
      id: 17,
      title: '【一件可客製】趣味圖騰麂皮絨靜音拖鞋',
      price: 'NT$ 480',
      link: '/product17',
      img: '/product17-1.webp',
      img2: '/product17-2.webp',
    },
    {
      id: 18,
      title: '說走就走 多WAY提袋野餐墊',
      price: '從NT$ 380起',
      link: '/product18',
      img: '/product18-1.webp',
      img2: '/product18-2.webp',
    },
  ];
  flawItems: ProductItem[] = [
    {
      id: 1,
      title: '【一件可客製】趣味圖騰麂皮絨靜音拖鞋',
      price: 'NT$ 480',
      link: '/product19',
      img: '/product19-1.webp',
      img2: '/product19-2.webp',
      discount: true,
    },
    {
      id: 2,
      title: '說走就走 多WAY提袋野餐墊',
      price: '從NT$ 380起',
      link: '/product20',
      img: '/product20-1.webp',
      img2: '/product20-2.webp',
      discount: true,
    },
  ];
}
