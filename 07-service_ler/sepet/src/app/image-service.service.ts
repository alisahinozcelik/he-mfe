import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageServiceService {
  public imageUrl = new Subject<string>();

  constructor() { }

  public changeUrl(url: string): void {
    this.imageUrl.next(url);
  }
}
