import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strLeftNn'
})
export class StrLeftNnPipe implements PipeTransform {

  transform(value: string ): string {
    const leftNN=175;
    let nn:number =value.length;
    if (nn<=leftNN) {
      return value
    } else {
      return value.substring(0,leftNN) + '...';
    }
  }

}
