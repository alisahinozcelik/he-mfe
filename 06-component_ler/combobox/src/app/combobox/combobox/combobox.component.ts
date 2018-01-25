import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit {
  @Input()
  public title;

  @Output()
  public eventKaynagi = new EventEmitter();

  constructor() {}

  ngOnInit() {
    let i = 0;
    setInterval(() => {
      i++;
      this.eventKaynagi.next(i);
    }, 1000);
  }

  public log(param: any) {
    console.log(param);
  }
}
