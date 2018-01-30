import { Pipe, PipeTransform } from '@angular/core';
import { IUrun } from './liste.service';

@Pipe({
  name: 'filterListe'
})
export class FilterListePipe implements PipeTransform {
  transform(value: IUrun[], args: string): any {
    if (value === undefined || args === undefined) {
      return value;
    }

    const filteredUrunler = value.filter(urun => {
      const searchKey = args.toLowerCase();
      const urunName = urun.name.toLowerCase();
      const doesExists = urunName.indexOf(searchKey) > -1;
      return doesExists;
    });

    return filteredUrunler;
    // return args ? value.filter(urun => urun.name.toLowerCase().indexOf(args.toLowerCase()) > -1) : value;
  }
}
