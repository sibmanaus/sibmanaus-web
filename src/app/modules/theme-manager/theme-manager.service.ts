import { Injectable } from '@angular/core';

declare const document: Document;

export interface Theme {
  name: ('dark' | 'light');
  primary: string;
  secondary: string;
  accent: string;
  danger: string;
  success: string;
  fontsecondary: string;
  fontprimary: string;
  bgprimary: string;
  bgsecondary: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {
  public readonly lightTheme: Theme = {
    name: 'light',
    primary: '#52CCA3',
    secondary: '#4FE359',
    accent: '#5E76DB',
    danger: '#FF4136',
    success: '#A5CE52',
    fontsecondary: '#000000',
    fontprimary: '#09424A',
    bgprimary: '#FFFFFF',
    bgsecondary: '#000000',
  };

  public readonly darkTheme: Theme = {
    name: 'dark',
    primary: '#52CCA3',
    secondary: '#4FE359',
    accent: '#5E76DB',
    danger: '#FF4136',
    success: '#A5CE52',
    fontsecondary: '#FFFFFF',
    fontprimary: '#B5BDB6',
    bgprimary: '#191919',
    bgsecondary: '#FFFFFF',
  };

  // tslint:disable-next-line: variable-name
  private _theme: Theme; get theme() { return this._theme; } set theme(theme) { this._theme = theme; this.updateTheme(); }

  constructor() { }

  updateTheme() {
    document.documentElement.style.setProperty('--primary', this.theme.primary);
    document.documentElement.style.setProperty('--secondary', this.theme.secondary);
    document.documentElement.style.setProperty('--accent', this.theme.accent);
    document.documentElement.style.setProperty('--danger', this.theme.danger);
    document.documentElement.style.setProperty('--success', this.theme.success);
    document.documentElement.style.setProperty('--fontsecondary', this.theme.fontsecondary);
    document.documentElement.style.setProperty('--fontprimary', this.theme.fontprimary);
    document.documentElement.style.setProperty('--bgprimary', this.theme.bgprimary);
    document.documentElement.style.setProperty('--bgsecondary', this.theme.bgsecondary);
  }
}
