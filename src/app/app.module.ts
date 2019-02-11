import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SelectPageComponent } from './components/select-page/select-page.component';
import { ShowComponent } from './components/show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CharDataService } from './services/char-data.service';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SelectPageComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
