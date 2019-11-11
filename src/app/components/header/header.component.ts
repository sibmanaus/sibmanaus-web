import { ThemeManagerService } from './../../modules/theme-manager/theme-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public themeClasses = {
    'navbar-dark': this.themeManager.theme.name === 'dark',
    'navbar-light': this.themeManager.theme.name === 'light',
  };

  constructor(public themeManager: ThemeManagerService) { }

  ngOnInit() {
  }

  changeTheme(themeName) {
      this.themeManager.theme =
        (themeName === 'dark') ?
          this.themeManager.darkTheme :
          this.themeManager.lightTheme;
      this.themeClasses = {
        'navbar-dark': this.themeManager.theme.name === 'dark',
        'navbar-light': this.themeManager.theme.name === 'light',
      };
  }
}
