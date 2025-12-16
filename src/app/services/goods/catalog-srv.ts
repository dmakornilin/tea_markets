import {Injectable, OnInit} from '@angular/core';
import {CatalogItemType} from '../../types/goods/catalog-item-type';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChoiceTeaType} from '../../types/goods/choice-tea-type';
import {OrderSendType} from '../../types/goods/order-send-type';

@Injectable({
  providedIn: 'root',
})

export class CatalogSrv implements OnInit {



  private _choiceTea:ChoiceTeaType ={id:0,title:''}
  public orderData:OrderSendType ={
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: 0,
    address: '',
  }



  set choiceTeaId(id:number){ this._choiceTea.id=id;}
  set choiceTeaTitle(title:string){ this._choiceTea.title=title;}

  get choiceTeaId():number {return this._choiceTea.id;}
  get choiceTeaTitle():string {return this._choiceTea.title;}

  ngOnInit() {
  }

  private products: CatalogItemType[] = [];


  constructor(private router: Router, private http: HttpClient) {

  }

  getProducts(): Observable<CatalogItemType[]>  {
    return this.http.get<CatalogItemType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<CatalogItemType> {
    return this.http.get<CatalogItemType>(`http://testologia.ru/tea?id=${id}`);
  }



  sendOrder() : Observable<{success: boolean, message?: string }> |null {
    if (this.http) {
      return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, this.orderData);
    } else return null;
  }


}
