import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CatalogSrv} from '../../../services/goods/catalog-srv';
import {Router, RouterLink} from '@angular/router';
import {CatalogItemType} from '../../../types/goods/catalog-item-type';
import {StrLeftNnPipe} from '../../../pipes/str-left-nn-pipe';

@Component({
  selector: 'catalog-component',
  imports: [
    StrLeftNnPipe,
    RouterLink
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


  protected to_order(itm:CatalogItemType) {
    this.catalogSrc.tea.set(itm)
    this.router.navigate(['/order']);
  }
}
