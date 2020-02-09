import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from 'src/classes/publication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private _url: string = "http://localhost:3000/publication/";

  constructor(private http: HttpClient) { }

  getPublications(): Observable<Publication[]>{
    return this.http.get<Publication[]>(this._url+"getAll");
  }
}
