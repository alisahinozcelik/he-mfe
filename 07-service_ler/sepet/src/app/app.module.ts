import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SepetComponent } from './sepet/sepet.component';
import { ListeComponent } from './liste/liste.component';
import { HeaderComponent } from './header/header.component';
import { ListeService } from './liste.service';
import { SepetService } from './sepet.service';
import { ImageDirective } from './image.directive';
import { VitrinComponent } from './vitrin/vitrin.component';
import { ImageServiceService } from './image-service.service';
import { FilterListePipe } from './filter-liste.pipe';
import { ShowSepetPipe } from './show-sepet.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UrunDetayComponent } from './urun-detay/urun-detay.component';
import { BosSepetGuard } from './bos-sepet.guard';

const ROUTES: Route[] = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {title: "Anasayfa", changeTitleAtRoot: true}
  },
  {
    path: "about",
    component: AboutComponent,
    data: {title: "Hakkımızda", changeTitleAtRoot: true}
  },
  {
    path: "urun/:id",
    component: UrunDetayComponent,
    data: {title: "Ürün", changeTitleAtRoot: false},
    canActivate: [BosSepetGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SepetComponent,
    ListeComponent,
    HeaderComponent,
    ImageDirective,
    VitrinComponent,
    FilterListePipe,
    ShowSepetPipe,
    HomeComponent,
    AboutComponent,
    UrunDetayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ListeService,
    SepetService,
    ImageServiceService,
    BosSepetGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
