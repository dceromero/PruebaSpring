import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persons } from '../interfaces/persons';


@Injectable({
  providedIn: 'root'
})
export class PruebarestService {

  constructor(private http: HttpClient) { }

  private headerContent = new HttpHeaders({'content-type': 'application/json'});
  private endPoint = 'http://localhost/api/clientes';


  postCreate( person: Persons) {
    return this.http.post<Persons>(this.endPoint, JSON.stringify(person), {headers : this.headerContent});
  }

  getDeleteClient(id: number) {
     return this.http.delete(`${this.endPoint}/${id}`, {headers : this.headerContent});
  }

  getDataServices() {
    return this.http.get<Persons>(this.endPoint);
  }

  PutUpdate(person: Persons) {
    return this.http.put(`${this.endPoint}/${person.id}`, JSON.stringify(person), {headers : this.headerContent});
  }


  getReadyById(id: number) {
    return this.http.get<Persons>(`${this.endPoint}/${id}`);
  }
}
