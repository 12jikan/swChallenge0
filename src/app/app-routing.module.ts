import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SelectPageComponent } from './components/select-page/select-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "select", component: SelectPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
