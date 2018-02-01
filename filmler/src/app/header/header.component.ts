import { Component, OnInit } from '@angular/core';
import { IMovie } from '../film.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgControl } from '@angular/forms';

import "rxjs/add/operator/filter";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchQuery: string;

  constructor(
    public router: Router
  ) {
    router.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {
        this.searchQuery = "";
      })
  }

  ngOnInit() {
  }

}
