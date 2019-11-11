import { Component, OnInit, HostBinding } from '@angular/core';

declare const document: Document;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @HostBinding('class') classes = 'footer mt-auto py-3 set-bgprimary';

  public year: number;

  constructor() {
  }

  ngOnInit() {
  }

}
