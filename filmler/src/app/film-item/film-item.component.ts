import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input()
  public film: IMovie = null;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  @HostListener("click")
  navigate() {
    this.router.navigate(["detay/" + this.film.id]);
  }
}
