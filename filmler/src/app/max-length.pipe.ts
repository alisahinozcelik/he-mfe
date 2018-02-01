import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './film.service';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(filmler: IMovie[], count: number): any {
    return filmler ? filmler.slice(0, count) : [];
  }

}
