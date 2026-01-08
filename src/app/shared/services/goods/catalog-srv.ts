import {Injectable, signal} from '@angular/core';
import {CatalogItemType} from '../../../types/goods/catalog-item-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderSendType} from '../../../types/goods/order-send-type';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class CatalogSrv{

  public readonly tea= signal <CatalogItemType | undefined> (undefined)
  public orderData:OrderSendType ={ name: '',last_name: '', phone: '', country: '',zip: '',product: 0, address: '',  }

  constructor(private readonly http: HttpClient) {
  }

  public getProducts(): Observable<CatalogItemType[]>  {
    return this.http.get<CatalogItemType[]>(environment.apiUrl + '/tea');
  }

  public getProduct(id: number): Observable<CatalogItemType> {
     const url = `${environment.apiUrl}/tea?id=${id}`;
    return this.http.get<CatalogItemType>(url);
  }

  public sendOrder() : Observable<{success: boolean, message?: string }> |null {
    if (this.http) {
      return this.http.post<{ success: boolean, message?: string }>(environment.apiUrl + `/order-tea`, this.orderData);
    } else return null;
  }

}
