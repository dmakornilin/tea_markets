import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CatalogSrv} from '../../../shared/services/goods/catalog-srv';
import {Router} from '@angular/router';
import {CatalogItemType} from '../../../types/goods/catalog-item-type';
import {StrLeftNnPipe} from '../../../shared/pipes/str-left-nn-pipe';

@Component({
  selector: 'catalog-component',
  imports: [
    StrLeftNnPipe
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {

  public products: CatalogItemType[] = [];


public ngOnInit() {
    this.catalogSrc.getProducts()
      .subscribe(  {
        next: (data) =>  {
          this.products = data;
          this.cdr.markForCheck();
        },
        error: (error)=> {
          console.log(error);
          this.router.navigate(['/']);
        },
      })
  }

  constructor(private readonly catalogSrc:CatalogSrv, private readonly router: Router, private readonly cdr:ChangeDetectorRef) {
  }


protected to_card(itm:CatalogItemType) {
  this.catalogSrc.tea.set(itm)
  this.router.navigate(['/tea-card']);
}

  protected to_order(itm:CatalogItemType) {
    this.catalogSrc.tea.set(itm)
    this.router.navigate(['/order']);
  }
}
