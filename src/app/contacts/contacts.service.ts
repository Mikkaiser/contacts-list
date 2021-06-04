import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  api = 'http://localhost:3333/contacts';
  
  constructor(private http: HttpClient) { }

  list() : any {
    return this.http.get<any[]>(`${this.api}`);
  }
}
