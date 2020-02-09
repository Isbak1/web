import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = "http://localhost:3000/user/";
  user : User;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this._url+"getAll");
  }

  getUserById(id:string): Observable<User> {
    return this.http.get<User>(this._url + "getOne/" + id);
  }

  getUser(username: string, password: string): Observable<User> {
    return this.http.post<User>(this._url + "login", {username, password});
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this._url + "register", user);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.post<User>(this._url + "getUserByEmail",{email});
  }

  putCurrent(user: User){
    this.user = user;
  }

  getCurrent(){
    return this.user;
  }

  removeCurrent(){
    this.user = undefined;
  }

  getUserByConfirm(email:string, password: string): Observable<User>{
    return this.http.post<User>(this._url + 'getUserByConfirm', {email, password});
  }

  resetPassword(email: string): Observable<User>{
    return this.http.post<User>(this._url + 'reset', {email});
  }
}
