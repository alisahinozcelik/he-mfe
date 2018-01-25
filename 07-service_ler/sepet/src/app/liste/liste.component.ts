import { Component, OnInit } from '@angular/core';
import { ListeService, IUrun } from '../liste.service';
import { SepetService } from '../sepet.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  public data: IUrun[];

  constructor(
    listeService: ListeService,
    public sepetService: SepetService
  ) {
    this.data = listeService.liste;
  }

  ngOnInit() {
  }

  public sepeteEkle(urun: IUrun): void {
    this.sepetService.urunEkle(urun);
  }

}
