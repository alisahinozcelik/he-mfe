import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SepetComponent } from './sepet/sepet.component';
import { ListeComponent } from './liste/liste.component';
import { HeaderComponent } from './header/header.component';
import { ListeService } from './liste.service';
import { SepetService } from './sepet.service';
import { ImageDirective } from './image.directive';

@NgModule({
  declarations: [
    AppComponent,
    SepetComponent,
    ListeComponent,
    HeaderComponent,
    ImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListeService,
    SepetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
