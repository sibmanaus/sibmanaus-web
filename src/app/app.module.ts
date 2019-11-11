import { ThemeManagerService } from './modules/theme-manager/theme-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './modules/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapsComponent } from './components/maps/maps.component';
import { CarouselBannersComponent } from './modules/bootstrap-angular8/carousel-banners/carousel-banners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    MapsComponent,
    CarouselBannersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BootstrapAngular8Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    ThemeManagerService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
