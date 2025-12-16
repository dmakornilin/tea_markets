import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CatalogSrv} from '../../../services/goods/catalog-srv';
import {HttpClient} from '@angular/common/http';
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

  public loading : boolean = false;
  public products: CatalogItemType[] | undefined = [];


  ngOnInit() {


    this.catalogSrc.getProducts()
      .subscribe(  {
        next: (data) =>  {
          this.loading = false;
          this.products = data;
          this.cdr.markForCheck();
        },
        error: (error)=> {
          console.log(error);
          this.router.navigate(['/']);
        },
      })

  }

  constructor(private catalogSrc:CatalogSrv,private http:HttpClient, private router: Router, private  cdr:ChangeDetectorRef) {
  }


  to_order(id:number,title:string) {
    this.catalogSrc.choiceTeaId=id;
    this.catalogSrc.choiceTeaTitle=title;
    this.router.navigate(['/order']);
  }
}
