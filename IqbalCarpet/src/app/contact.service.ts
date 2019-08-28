import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  // Http Headers
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  // getContacts(): Observable<Contact> {
  //   return this.http.get<Contact>('http://localhost:3000/api/contacts')
  //   }

  getContacts() :Observable<Contact>{
    return this.http.get<Contact>('http://localhost:3000/api/contacts')
  }

  addContact(newContact){
    var headers = new  HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers})
  }

  deleteContact(id:number){
    return this.http.delete('http://localhost:3000/api/contact/'+ id)
  }
  // deleteContact(id: number) {
  //   return this.http.delete(`http://localhost:3000/api/contact/' + id)
  // }
}