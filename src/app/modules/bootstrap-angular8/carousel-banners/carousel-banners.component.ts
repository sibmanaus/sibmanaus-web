import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

declare const window: Window;

export interface BannersInfo {
  src: string;
  alt?: string;
  subject?: string;
  title?: string;
  subtitle?: string;
  duration?: number;
  link?: { redirect?: boolean, url: string, text?: string };
}

@Component({
  selector: 'app-carousel-banners',
  templateUrl: './carousel-banners.component.html',
  styleUrls: ['./carousel-banners.component.scss']
})
export class CarouselBannersComponent implements OnInit {
  @Input() bannerInfos: BannersInfo[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openLink(redirect = false, url: string) {
    if (redirect) {
      window.open(url, '_blank');
    } else {
      this.router.navigate([url]);
    }
  }
}
