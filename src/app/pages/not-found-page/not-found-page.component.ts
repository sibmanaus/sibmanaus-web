import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  public timeToRedirect = 5;

  private countDown = () => {
    if (this.timeToRedirect > 0) {
      this.timeToRedirect--;
      setTimeout(this.countDown, 1000);
    } else {
      this.pRouter.navigate(['']);
    }
  }

  constructor(private pRouter: Router) { }

  ngOnInit() {
    setTimeout(this.countDown, 1000);
  }


}
