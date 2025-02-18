import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  getColor(s:string) : string{
  if (s == "Disponible"){
    return "green";
  }
  else if (s == "Vendu"){
   return "red";
  }
  else if (s == "En Construction"){
    return "blue";
  }
  else{
    return "";
  }

}

  getLocation(r:Residence){
    this.showAdress=true;
    this.id=r.id;
  }
  favoris : Residence[] = [];
  addFavoris(r:Residence){
   this.favoris.push(r);
  }
  showAdress : boolean = false;
  address : string = "";

  id!: number;
    listResidences:Residence[]=[
      {id:1,"name": "El fel","address":"Borj Cedria",
      "image":"../../assets/images/R1.jpeg", status: "Disponible"},
      {id:2,"name": "El yasmine",
      "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
      "Disponible" },
      {id:3,"name": "El Arij",
      "address":"Rades","image":"../../assets/images/R3.jpg", status:
      "Vendu"},
      {id:4,"name": "El Anber","address":"inconnu",
      "image":"../../assets/images/R4.jpg", status: "En Construction"}
      ];


}
