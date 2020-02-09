import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/classes/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _url: string = "http://localhost:3000/categorie/";
  private options;
  categories = [];

  constructor(private http: HttpClient) { }

  // getCategories(): Observable<Categorie[]> {
  //   return this.http.get<Categorie[]>(this._url + "getall/");
  // }

  getCategories() {
    return this.http.get(this._url + "getall/");
  }

  getCategorieById(id:string): Observable<Categorie> {
    return this.http.get<Categorie>(this._url + "getOne/" + id);
  }

  put(categories: any){
    this.categories = categories;
  }

  get(){
    return this.categories;
  }
}