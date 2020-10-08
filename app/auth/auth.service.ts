import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {Token} from './token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  token:Token;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http:HttpClient){

  }
  login(username:string, password:string): Observable<boolean> {

    var loginUrl = "/api/odata/AccountDto";
    var payload = {
      "Username":username,
      "Password":password
    }
    // this.http.post<Token>(loginUrl, payload).subscribe(token=>{
    //   this.token = token;
    //   tap(val => this.isLoggedIn = true);
    //   return true;
    // });
    this.token = new Token;
    this.token.value = "test token";
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)      
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
