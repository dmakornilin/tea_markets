import { Injectable } from '@angular/core';
import {BannerType} from '../../../types/common/banner-type';

@Injectable({
  providedIn: 'root',
})
export class BannersList {
  getBanners():BannerType[] {
    let banners: BannerType[] = [
      {id: 1, image: 'tea1',},
      {id: 2, image: 'tea2',},
      {id: 3, image: 'tea3',},
    ];
    return banners;
  }

}
