import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContacteService {

  baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  postFaleConnosco(fields: any) {
    return this.http.post<any>(`${this.baseUrl}faleConnosco`, fields).pipe(map((res : any) => {
        return res
    }))
  }

  getAssunto(){
    return this.http.get<any>(`${this.baseUrl}assuntoFaleconnosco`).pipe(map((res :any) =>{
      return res
    }))
  }

}
