import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './admin/aboutus/aboutus.component';
import { ContactusComponent } from './admin/contactus/contactus.component';
import { EventsComponent } from './admin/events/events.component';
import { HomeComponent } from './admin/home/home.component';
import { OurproductComponent } from './admin/ourproduct/ourproduct.component';
import { OurservicesComponent } from './admin/ourservices/ourservices.component';
import { TrainingComponent } from './admin/training/training.component';
import { ViewportComponent } from './admin/viewport/viewport.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  // {path:'', component:ViewportComponent},
  {path:'home', component:ViewportComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'events',component:EventsComponent},
  {path:'product',component:OurproductComponent},
  {path:'services',component:OurservicesComponent},
  {path:'training',component:TrainingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
