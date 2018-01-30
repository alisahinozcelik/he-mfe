import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import "rxjs/add/operator/first";
import { ListeService, IUrun } from '../liste.service';
import { SepetService } from '../sepet.service';

@Component({
  selector: 'app-urun-detay',
  templateUrl: './urun-detay.component.html',
  styleUrls: ['./urun-detay.component.css']
})
export class UrunDetayComponent implements OnInit {
  public data: IUrun;

  constructor(
    public route: ActivatedRoute,
    public list: ListeService,
    public router: Router,
    public sepet: SepetService
  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .first()
      .toPromise()
      .then(map => map.get("id"))
      .then(id => this.list.liste.find(item => item.id === id))
      .then(data => this.data = data);
  }

  sepeteEkle() {
    this.sepet.urunEkle(this.data);
    this.router.navigate(["/"]);
  }
}
