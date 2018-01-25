import { Injectable } from '@angular/core';
import { IUrun } from './liste.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type UrunObs = BehaviorSubject<Map<IUrun, number>>;

@Injectable()
export class SepetService {
  private _urunlerMap = new Map<IUrun, number>();
  public urunler: UrunObs;

  constructor() {
    this.urunler = new BehaviorSubject(this._urunlerMap);
  }

  /**
   * Ürün ekleme methodu
   * @param urun Eklenecek Ürün
   */
  public urunEkle(urun: IUrun): void {
    if (!this._urunlerMap.has(urun)) {
      this._urunlerMap.set(urun, 1);
    } else {
      const count = this._urunlerMap.get(urun);
      this._urunlerMap.set(urun, count + 1);
    }

    this.urunler.next(this._urunlerMap);
  }
}
