import { Pipe, PipeTransform } from '@angular/core';
import { FilmService } from './film.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(
    public filmService: FilmService
  ) {

  }

  transform(value: any, query: string): any {
    return query ? this.filmService.findMovies(query) : Promise.resolve([]);
  }

}
