import { IEmployee } from './myinterface1';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
   
   private _url:string = "/assets/Employee.json"
  constructor( private http:HttpClient) { }

  GetEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
     
  }
