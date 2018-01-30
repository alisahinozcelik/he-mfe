import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .switchMap(e => route.root.firstChild.data)
      .filter(data => data.changeTitleAtRoot)
      .map(data => data.title)
      .subscribe(title => document.title = title);
  }
}
