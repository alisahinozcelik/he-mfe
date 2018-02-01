import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import "rxjs/add/operator/first";
import { FilmService, IMovie } from '../film.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {
  public data: IMovie;

  constructor(
    public route: ActivatedRoute,
    public filmService: FilmService
  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .first()
      .toPromise()
      .then(map => map.get("id"))
      .then(id => this.filmService.getById(id))
      .then(res => this.data = res);
  }

}
