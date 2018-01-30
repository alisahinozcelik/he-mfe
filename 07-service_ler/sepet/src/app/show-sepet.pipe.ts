import { Pipe, PipeTransform } from '@angular/core';
import { IUrun } from './liste.service';

interface IUrunView {
  name: string;
  count: number;
}

@Pipe({
  name: 'showSepet',
  pure: false
})
export class ShowSepetPipe implements PipeTransform {

  transform(value: Map<IUrun, number>): Array<IUrunView> {
    const arr: IUrunView[] = [];
    value.forEach((count, {name}) => {
      arr.push({count, name});
    });
    return arr;
  }
}
