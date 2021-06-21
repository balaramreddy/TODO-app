import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private httpclient:HttpClient) { }
  
  getContacts():Observable<Admin[]>{
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    return this.httpclient.get<Admin[]>(url)
  }
 
}
