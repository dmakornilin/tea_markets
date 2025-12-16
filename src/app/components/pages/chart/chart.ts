import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {ChartSrv} from '../../../services/common/chart-srv';
import {ChartItemType} from '../../../types/common/chart-item-type';
import {RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'chart-component',
  imports: [
    RouterLink,
    FormsModule

  ],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class Chart implements OnInit, OnDestroy {


  private observable:Observable<void>;
  @ViewChild('popDiv') popupDiv!: ElementRef<HTMLElement>;

  charts: ChartItemType[];

  constructor(private chartSrv:ChartSrv) {
    this.charts=chartSrv.getCharts();
    this.observable = new Observable<void>(observer => {
       setTimeout(() => {
         observer.next();
           }, 10000);
    })
  }

  change_expand(chart: ChartItemType) {
    chart.isAnswerShow=!chart.isAnswerShow;
  }




  ngOnInit() {
    this.observable
      .subscribe( () => {
        if (this.popupDiv) {
          this.popupDiv.nativeElement.classList.remove('is-hide');
        }
      } )
  }

  ngOnDestroy() {
    this.observable.subscribe();
  }
}
