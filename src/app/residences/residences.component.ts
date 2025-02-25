import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
  providers:[]   //les services disponibles uniquement pour ce composant
})
export class ResidencesComponent implements OnInit {

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
    listResidences:Residence[]=[];
constructor(private rs:ResidenceService){}
    ngOnInit(){
    this.rs.getAll().subscribe(res=>this.listResidences=res)
    }


}
