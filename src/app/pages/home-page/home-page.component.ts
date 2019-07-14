import { BannersInfo } from './../../modules/bootstrap-angular8/carousel-banners/carousel-banners.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public banners: BannersInfo[] = [
    {
      src: 'assets/banners/banner_sib_passado.jpg',
      title: 'SIB Manaus do passado',
      subtitle: 'lorem ipsum',
      alt: 'SIB Manaus do passado',
    },
    {
      src: 'assets/banners/banner_sib_presente.jpg',
      title: 'SIB Manaus do passado',
      alt: 'SIB Manaus do passado',
    },
    {
      src: 'assets/banners/banner_sib_futuro.jpg',
      title: 'SIB Manaus do passado',
      subtitle: 'lorem ipsum',
      alt: 'SIB Manaus do passado',
    },
    {
      src: 'assets/banners/slide-arvore2.jpg',
      title: 'SIB Manaus do passado',
      subtitle: 'lorem ipsum',
      alt: 'SIB Manaus do passado',
    },
    {
      src: 'assets/banners/slide-militares2.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
