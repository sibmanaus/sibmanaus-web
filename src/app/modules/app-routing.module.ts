import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './../pages/about-page/about-page.component';
import { HomePageComponent } from './../pages/home-page/home-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false /** debug */ }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
