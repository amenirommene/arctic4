import { Residence } from './../models/residence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//@Injectable : décorateur pour dire que la classe actuelle est un service
@Injectable({
  providedIn: 'root'  //une seule instance pour tous
})
export class ResidenceService {
  url : string= "http://localhost:3000/residences";
  constructor(private _http:HttpClient) { }
  getAll() : Observable<Residence[]>{
   return  this._http.get<Residence[]>(this.url);
  }

  getResidenceById(id:string):Observable<Residence>{
    return  this._http.get<Residence>(this.url+"/"+id);
  }
}
