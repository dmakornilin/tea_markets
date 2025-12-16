import {Injectable} from '@angular/core';
import {ChartItemType} from '../../types/common/chart-item-type';

@Injectable({
  providedIn: 'root',
})
export class ChartSrv {
  getCharts(): ChartItemType[] {
      let result: ChartItemType[] = [
        {id:1, isAnswerShow:true, question:'Собираете ли вы подарочные боксы?',
          answer:'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость! '+
            'У нас есть специальные предложения к праздникам, свадьбам и дням рождения.'
        },
        {id:2, isAnswerShow:false, question:'Сколько у вас разновидностей чая?',
          answer:'У нас большая коллекция. В настоящее время представлено более 12 разновидностей чая.'
        },
        {id:3, isAnswerShow:false, question:'В какой срок осуществляется доставка?',
          answer:'Доставка осуществляется со склада в течение 3 рабочих дней.'
        },
        {id:4, isAnswerShow:false, question:'У вас обновляется ассортимент?',
          answer:'Ассортимент обновляется регулярно.'
        },
        {id:5, isAnswerShow:false, question:'Какого объема у вас пачки чая?',
          answer:'Представлены пачки 75 и 125 гр.'
        },
        {id:6, isAnswerShow:false, question:'Каким образом осуществляется оплата?',
          answer:'Вы можете оплатить любым удобным способом. С принимаем наличные, чеки, банковские переводы и основные карточки, в т.ч. Visa и MasterCard.'
        },
      ];
      return result;
   }


}
