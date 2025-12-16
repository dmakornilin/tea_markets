import {Component, ViewChild} from '@angular/core';
import {SlickCarouselComponent, SlickCarouselModule} from 'ngx-slick-carousel';
import {BannerType} from '../../../types/common/banner-type';
import {BannersList} from '../../../services/common/banners-srv';

@Component({
  selector: 'app-banners',
  imports: [SlickCarouselModule],
  templateUrl: './banners.html',
  styleUrl: './banners.scss',
})
export class Banners {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  title = 'ngSlick';
  slides:BannerType[] =[] ;
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  constructor(private bnrSrv:BannersList ) {
    this.slides =bnrSrv.getBanners();
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    // console.log('slick initialized');
  }

  breakpoint(e:any) {
    // console.log('breakpoint');
  }

  afterChange(e:any) {
    // console.log('afterChange');
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  _trackBy(index: number, item: any) {
    return item.id;
  }

}
