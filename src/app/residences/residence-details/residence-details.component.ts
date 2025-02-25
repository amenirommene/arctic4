import { ResidenceService } from './../../core/services/residence.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
 id : string = "-1";
  //injecter une instance appelé "ac" du service activatedRoute
  constructor(private ac:ActivatedRoute,private rs:ResidenceService){
    console.log("je suis le constructor");
  }
//méthode hook qui se déclenche aprés le constructor
  ngOnInit(){
    console.log("je suis ngOnInit");
    this.ac.paramMap.subscribe(res=>{this.id!=res.get('id');
  this.rs.getResidenceById(this.id).subscribe(res=>console.log(res))
  });
   //console.log(this.ac.snapshot.params['id']);
}
  f(){
    this.ac.paramMap.subscribe();
  }

}
