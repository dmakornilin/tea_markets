import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogSrv} from '../../../services/goods/catalog-srv';
import {CatalogItemType} from '../../../types/goods/catalog-item-type';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'tea-card-component',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './tea-card.html',
  styleUrl: './tea-card.scss',
})
export class TeaCard implements OnInit {


  protected teaItem:CatalogItemType= {id: 0, image: '', title: '', price: 0, description: ''};

  constructor(private activateRoute: ActivatedRoute, private catalogSrv: CatalogSrv, private router: Router, private cdr: ChangeDetectorRef) {
    this.initial();
  }

  public ngOnInit() {
  }

  protected to_order(itm:CatalogItemType) {
    this.catalogSrv.tea.set(itm);
    this.router.navigate(['/order']);
  }

  private initial() {
    this.activateRoute.params.subscribe((params) => {
      if (params['id']) {
        this.catalogSrv.getProduct(+params['id'])
          .subscribe({
            next: (data: CatalogItemType) => {
              this.teaItem = data;
              this.cdr.markForCheck();
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          })
      } else {
        this.router.navigate(['/']);
      }
    })
  }
}
