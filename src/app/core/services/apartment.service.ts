import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  url : string= "http://localhost:3000/apartments";
  constructor(private myHttp:HttpClient) { }
  addApartment(a:Apartment):Observable<Apartment>{
    return  this.myHttp.post<Apartment>(this.url,a);
  }
}
