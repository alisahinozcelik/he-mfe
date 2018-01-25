import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComboboxModule } from './combobox/combobox.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComboboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
