import { Component, OnInit } from '@angular/core';
import { UrunObs, SepetService } from '../sepet.service';

@Component({
  selector: 'sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css']
})
export class SepetComponent implements OnInit {
  public data: UrunObs;
  public total = 0;

  constructor(
    public sepetService: SepetService
  ) {
    this.data = sepetService.urunler;

    sepetService.urunler.subscribe(data => {
      let total = 0;

      data.forEach((count, urun) => {
        total += urun.price * count;
      });

      this.total = total;
    });
  }

  ngOnInit() {
  }

}
