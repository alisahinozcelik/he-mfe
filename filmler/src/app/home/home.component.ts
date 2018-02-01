import { Component, OnInit } from '@angular/core';
import { FilmService, IMovie } from '../film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filmler: IMovie[] = [];

  constructor(
    public filmService: FilmService
  ) {
  }

  ngOnInit() {
    this.filmService.getPopulerFilmler()
      .then(res => {
        this.filmler = res;
      });
  }

}
