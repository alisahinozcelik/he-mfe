import { Directive, OnInit, HostListener } from '@angular/core';
import { IUrun } from './liste.service';
import { Subject } from 'rxjs/Subject';
import { ImageServiceService } from './image-service.service';

@Directive({
  selector: '[appImage]',
  inputs: ['urun'],
  exportAs: "image"
})
export class ImageDirective implements OnInit {
  private urun: IUrun;
  private img = new Subject<HTMLImageElement>();

  constructor(
    public imageService: ImageServiceService
  ) {
    console.log('directive');
  }

  @HostListener("click")
  onMouseEnter() {
    this.imageService.changeUrl(this.urun.image);
  }

  ngOnInit() {
    new Promise<HTMLImageElement>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.urun.image);
      xhr.responseType = 'blob';

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = reject;
      xhr.send();
    })
    .then(blob => {
      return URL.createObjectURL(blob);
    })
    .then(src => {
      const img = document.createElement("img");
      img.src = src;
      return img;
    })
    .then(img => {
      return new Promise<HTMLImageElement>(resolve => {
        setTimeout(() => {resolve(img)},  1000);
      });
    })
    .then(img => {
      this.img.next(img);
    });
  }
}
