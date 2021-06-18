import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  
  getContacts(){
    const contactList =[
    {contactId:1, name:'google'},
    {contactId:2, name:'youtube'},
    {contactId:3, name:'instagram'},
    {contactId:4, name:'facebook'},
    ];
    return contactList;
  }
}
