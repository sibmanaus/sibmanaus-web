import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const require: any;

require('bootstrap');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-sib';

  constructor(router: Router) {

  }
}
