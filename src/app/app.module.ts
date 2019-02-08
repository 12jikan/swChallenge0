import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SelectPageComponent } from './components/select-page/select-page.component';
import { SelectComponent } from './components/select-page/select/select.component';
import { ShowComponent } from './components/select-page/show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CharDataService } from './services/char-data.service';
import { StarWarsDataService } from './services/star-wars-data.service';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SelectPageComponent,
    SelectComponent,
    ShowComponent,
    NavbarComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CharDataService,
    StarWarsDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
