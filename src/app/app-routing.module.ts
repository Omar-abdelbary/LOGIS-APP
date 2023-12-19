import { ServicesComponent } from './services/services.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  { path: "home" , component: HomeComponent } ,
  { path: "" , component: HomeComponent } ,
  { path: "about" , component: AboutComponent } ,
  { path: "services" , component: ServicesComponent } ,
  { path: "pricing" , component: PricingComponent } ,
  { path: "contact" , component: ContactComponent } ,
  { path: "**" , component: NotFoundComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
