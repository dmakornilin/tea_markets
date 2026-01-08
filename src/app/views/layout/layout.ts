import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from '../../shared/layout/header/header';
import {Footer} from '../../shared/layout/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
