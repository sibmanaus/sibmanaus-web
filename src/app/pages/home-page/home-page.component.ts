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
      src: 'assets/banners/full1.jpeg',
      duration: 4000,
      subject: 'Podcast',
      title: 'Toda semana, uma mensagem especial para você',
      link: {
        redirect: true,
        url: 'https://open.spotify.com/show/4aZYsl2SDQ4hOID32Dw4Fs',
        text: 'Abrir no Spotify',
      },
    },
    {
      src: 'assets/banners/full2.jpg',
      duration: 4000,
      subject: 'Crise na Venezuela',
      title: 'Abrigo OASIS: Um ano de trabalho e muita gratidão',
      subtitle: 'O projeto OASIS completou um ano de existência, abrigando refugiados venezuelanos e acompanhando as famílias.',
      link: {
        redirect: true,
        url: 'https://www.instagram.com/abrigooasis/',
        text: 'Leia mais',
      },
    },
    {
      src: 'assets/banners/full3.jpg',
      duration: 4000,
      subject: 'Versículo do dia',
      title: 'Respondeu Jesus: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.',
      subtitle: 'João 14.6',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
