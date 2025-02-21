import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  myForm! : FormGroup;
  myForm2! : FormGroup;
  constructor(){}
  //initialiser les propriétés du composant, elle ne remplace le constructeur
  ngOnInit(){
  this.myForm = new FormGroup({
    floorNB : new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    apartmentNB: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")])

  })
  this.myForm2= new FormGroup({});
  }
  //getter pour retourner le FormControl floorNb
  get floor(){
    return this.myForm.get('floorNB');
  }

  add(){
    console.log(this.myForm.value);
  }

}
