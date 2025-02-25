import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { HeaderComponent } from './core/sheared/header/header.component';
import { FooterComponent } from './core/sheared/footer/footer.component';
import { HomeComponent } from './core/sheared/home/home.component';
import { NotFoundComponent } from './core/sheared/not-found/not-found.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddApartmentComponent } from './core/add-apartment/add-apartment.component';
import { HttpClientModule } from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddApartmentComponent
  ],
  imports: [ //liste des packages à utiliser par les composants ce module
    BrowserModule,
    AppRoutingModule,
    FormsModule, //pour utiliser ngModel
    ReactiveFormsModule, //pour utiliser FormGroupDirective, FormControlName, ......
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
