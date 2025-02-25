import { AddApartmentComponent } from './core/add-apartment/add-apartment.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { NotFoundComponent } from './core/sheared/not-found/not-found.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './core/sheared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},

{path:"home", component:HomeComponent, children:[
  {path:"details/:id", component:ResidenceDetailsComponent}
]},
{path:"residences", component:ResidencesComponent, children:[
  {path:"details/:id", component:ResidenceDetailsComponent}
]},
{path:"details/:id", component:ResidenceDetailsComponent},
{path:"addApartment", component:AddApartmentComponent},
//a la dernière position
{path:"**", component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
