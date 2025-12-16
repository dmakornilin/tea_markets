import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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


  @ViewChild('', {static: true}) linkElement!: ElementRef;


  _teaItem: CatalogItemType;
  get teaItem(): CatalogItemType {
    return this._teaItem
  }

  constructor(private activateRoute: ActivatedRoute, private catalogSrv: CatalogSrv, private router: Router, private cdr: ChangeDetectorRef) {
    this._teaItem = {id: 0, image: '', title: '', price: 0, description: ''};
    this.initial();

  }

  ngOnInit() {
  }

  to_order() {
    this.catalogSrv.choiceTeaId=this._teaItem.id;
    this.catalogSrv.choiceTeaTitle=this._teaItem.title;
    this.router.navigate(['/order']);
  }

  initial() {
    this.activateRoute.params.subscribe((params) => {
      if (params['id']) {
        this.catalogSrv.getProduct(+params['id'])
          .subscribe({
            next: (data: CatalogItemType) => {
              this._teaItem = data;
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
