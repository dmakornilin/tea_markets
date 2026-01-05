import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {ChartSrv} from '../../../shared/services/common/chart-srv';
import {ChartItemType} from '../../../types/common/chart-item-type';
import {RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {Banners} from '../banners/banners';

@Component({
  selector: 'chart-component',
  imports: [
    RouterLink,
    FormsModule,
    Banners
  ],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class Chart implements OnInit, OnDestroy {


  private observable:Observable<void>;
  @ViewChild('popDiv') popupDiv!: ElementRef<HTMLElement>;

  protected readonly charts: ChartItemType[];

  constructor(private readonly chartSrv:ChartSrv) {
    this.charts=chartSrv.getCharts();
    this.observable = new Observable<void>(observer => {
       setTimeout(() => {
         observer.next();
           }, 10000);
    })
  }

  protected change_expand(chart: ChartItemType) {
    chart.isAnswerShow=!chart.isAnswerShow;
  }

  public ngOnInit() {
    this.observable
      .subscribe( () => {
        if (this.popupDiv) {
          this.popupDiv.nativeElement.classList.remove('is-hide');
        }
      } )
  }

  protected close_popup() {
    this.popupDiv.nativeElement.classList.add('is-hide');
  }

  public ngOnDestroy() {
    this.observable.subscribe();
  }
}
