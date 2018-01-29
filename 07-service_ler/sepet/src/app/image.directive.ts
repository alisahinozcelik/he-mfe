import { Directive, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { IUrun } from './liste.service';

@Directive({
  selector: '[appImage]',
  inputs: ['urun']
})
export class ImageDirective implements OnInit {
  private urun: IUrun;
  private sizes = {width: 0, height: 0};

  constructor() {
    console.log('directive');
  }

  ngOnInit() {
    const prom = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://firebasestorage.googleapis.com/v0/b/pokedex-c0501.appspot.com/o/images%2Fsprites%2Fdefault%2F117.png?alt=media&token=60559739-4dc3-41a7-aea8-b1df1985f329');
      xhr.responseType = 'blob';
      xhr.onload = resolve;
      xhr.onerror = reject;
      xhr.send();
    });
  }
}
