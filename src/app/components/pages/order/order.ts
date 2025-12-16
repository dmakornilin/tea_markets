import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogSrv} from '../../../services/goods/catalog-srv';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  addressRegular,
  commonIndexRegular,
  countryRegular,
  nameRegular,
  phoneRegular
} from '../../../types/common/common-regular';
import {Subscription} from 'rxjs';
import {OrderSendType} from '../../../types/goods/order-send-type';
import {Router} from '@angular/router';

@Component({
  selector: 'order-component',
  imports: [
    FormsModule, ReactiveFormsModule,
  ],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})

export class Order implements OnInit, OnDestroy {


  get teaId(): number {
    return this.catalogSrv.choiceTeaId
  }

  get teaTitle(): string {
    return this.catalogSrv.choiceTeaTitle
  }


  private subscrptionOrder: Subscription | null = null;

  public orderForm: FormGroup;
  public errorSend:boolean = false;

  get name_dirty() { return this.orderForm.get('firstName')?.dirty }
  get phone_dirty() { return this.orderForm.get('phone')?.dirty }
  get country_dirty() { return this.orderForm.get('country')?.dirty }
  get zip_dirty() { return this.orderForm.get('zip')?.dirty }
  get address_dirty() { return this.orderForm.get('address')?.dirty }
  get lastname_dirty() { return this.orderForm.get('lastName')?.dirty }


  constructor(private catalogSrv: CatalogSrv, private fb: FormBuilder, private router: Router) {
    this.orderForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(nameRegular) ]],
    lastName: ['', [Validators.required, Validators.pattern(nameRegular) ]],
    phone: ['', [Validators.required, Validators.pattern(phoneRegular) ]],
    country: ['', [Validators.required, Validators.pattern(countryRegular) ]],
    zip: ['', [Validators.required, Validators.pattern(commonIndexRegular) ]],
    address: ['', [Validators.required, Validators.pattern(addressRegular) ]],
    comment: ['', []],
    })
  }

  ngOnInit() {
    this.errorSend = false;
  }

  ngOnDestroy() {
    this.subscrptionOrder?.unsubscribe()
  }

  send_order() {
    if (this.orderForm.valid) {
      this.catalogSrv.orderData = {
        name: this.orderForm.get('firstName')!.value,
        last_name: this.orderForm.get('lastName')!.value,
        phone: this.orderForm.get('phone')!.value,
        country: this.orderForm.get('country')!.value,
        zip: this.orderForm.get('zip')!.value,
        address: this.orderForm.get('address')!.value,
        product: this.teaId
      }
      if (this.orderForm.get('comment')!.value) {
        this.catalogSrv.orderData.comment = this.orderForm.get('comment')!.value
      }
      this.subscrptionOrder = this.catalogSrv.sendOrder()!
        .subscribe(response => {
          if (response.success && !response.message) {
            this.to_success();
          } else this.to_error();
        })


    }
  }

  to_success() {
    this.orderForm.reset();
    this.router.navigate(['/success']);

  }

  to_error() {
    this.errorSend = true;

  }

}
