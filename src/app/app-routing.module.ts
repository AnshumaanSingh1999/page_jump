import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { CovidcasesappComponent } from './covidcasesapp/covidcasesapp.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    component:WeatherappComponent,
    path:"Weatherapp"
  }
  ,
  {
    component:CovidcasesappComponent,
    path:"Covidcasesapp"
  }
  ,
  {
    component:HomepageComponent,
    path:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
