import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBannersComponent } from './carousel-banners/carousel-banners.component';

@NgModule({
  declarations: [
    CarouselBannersComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CarouselBannersComponent,
  ]
})
export class BootstrapAngular8Module { }
