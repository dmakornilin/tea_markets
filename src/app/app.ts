import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Header} from './components/common/header/header';
import {Footer} from './components/common/footer/footer';
import {Banners} from './components/common/banners/banners';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Banners, RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {
  protected readonly title = signal('tea_markets');
}
