import { Apartment } from './../models/apartment';
import { ApartmentService } from './../services/apartment.service';
import { Residence } from './../models/residence';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  myForm! : FormGroup;
  myForm2! : FormGroup;
  listResidences : Residence[] = [];
  constructor(private rs:ResidenceService, private aps:ApartmentService){
    this.rs.getAll().subscribe(res=>this.listResidences=res);
  }

  //initialiser les propriétés du composant, elle ne remplace le constructeur
  ngOnInit(){

  this.myForm = new FormGroup({
    floorNB : new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    apartmentNB: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    surface : new FormControl("", Validators.required),
      terrace : new FormControl("", Validators.required),
      surfaceTerrace : new FormControl("", Validators.required),
      category : new FormControl("", Validators.required),
      description : new FormControl("", [Validators.required, Validators.minLength(10)]),
      residence : new FormControl(),

  })
  this.myForm2= new FormGroup({});
  }
  //getter pour retourner le FormControl floorNb
  get floorNum(){
    return this.myForm.get('floorNB');
  }
  get apartNum(){
    return this.myForm.get('apartmentNB');
  }

  get surface() { return this.myForm.get('surface'); }
  get surfaceTerrace() { return this.myForm.get('surfaceTerrace'); }
  get terrace() { return this.myForm.get('terrace'); }
  get category() { return this.myForm.get('category'); }
  get description() { return this.myForm.get('description'); }
  get residence() { return this.myForm.get('residence'); }

  add(){
    let a = new Apartment();
    a.appartNum=this.apartNum?.value;
    a.category=this.category?.value;
    a.floorNum=this.floorNum?.value;
    a.description=this.description?.value;
    a.surface=this.surface?.value;
    a.surfaceTerrace=this.surfaceTerrace?.value;
    a.terrace=this.terrace?.value;
    a.residence=this.residence?.value;


    this.aps.addApartment(a).subscribe();
  }
}
