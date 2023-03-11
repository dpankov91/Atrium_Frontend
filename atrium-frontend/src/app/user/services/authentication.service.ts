import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl: string = 'http://localhost:8001/api/account';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.apiUrl, {username, password})
      .pipe(map(response =>{
        const token = response && response.token;
        console.log(response);
        if(token){
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token }));
          return true;
        } else {
          return false;
        }
      }));
  };

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUserName(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void{
    localStorage.removeItem('currentUser');
  }
}
