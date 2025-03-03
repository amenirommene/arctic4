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
  constructor(private rs:ResidenceService){
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
  add(){
    console.log(this.myForm.value);
  }
  get surface() { return this.myForm.get('surface'); }
  get surfaceTerrace() { return this.myForm.get('surfaceTerrace'); }
  get terrace() { return this.myForm.get('terrace'); }
  get category() { return this.myForm.get('category'); }
  get description() { return this.myForm.get('description'); }
  get residence() { return this.myForm.get('residence'); }

}
