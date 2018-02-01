import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetayComponent } from './detay/detay.component';
import { MaxLengthPipe } from './max-length.pipe';
import { HeaderComponent } from './header/header.component';
import { FilmService } from './film.service';
import { SearchPipe } from './search.pipe';
import { FilmItemComponent } from './film-item/film-item.component';

const ROUTES: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "detay/:id", component: DetayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetayComponent,
    MaxLengthPipe,
    HeaderComponent,
    SearchPipe,
    FilmItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
