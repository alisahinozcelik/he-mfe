import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-vitrin',
  templateUrl: './vitrin.component.html',
  styleUrls: ['./vitrin.component.css']
})
export class VitrinComponent implements OnInit {
  public src: string;

  constructor(
    private service: ImageServiceService
  ) {
  }

  ngOnInit() {
    this.service.imageUrl.subscribe(res => {
      this.src = res;
    });
  }

}
