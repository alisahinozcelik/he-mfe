import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  public comboboxTitle = 'Pick A Game';
  public deger: number;

  public templateMethod(param, param2, value) {
    this.deger = value;
  }
}
