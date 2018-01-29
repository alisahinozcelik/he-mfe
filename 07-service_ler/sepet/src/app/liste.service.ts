import { Injectable } from '@angular/core';
declare function require(param: string): any;

const liste = require('./urunler.json');

export interface IUrun {
  id: string;
  name: string;
  price: number;
  image: string;
}

@Injectable()
export class ListeService {
  public liste: IUrun[] = liste;
}
