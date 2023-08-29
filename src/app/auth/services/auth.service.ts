import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseURI: string = environment.baseURI;
  private http = inject(HttpClient);

  login(data: any) {
    return this.http.post(`${this.baseURI}/login`, data).pipe(
      map(result => {
        localStorage.setItem('authUser', JSON.stringify(result))
      }

      ));
  }

  register(data: any) {
    return this.http.post(`${this.baseURI}/register`, data)
  }

  profile() {
    return this.http.get(`${this.baseURI}/user`)
  }

  logout() {
    return this.http.get(`${this.baseURI}/logout`)
      .pipe(tap(() => {
        localStorage.removeItem('authUser')
      }));

  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem('authUser') as string);
  }

  get isLoggeIn() {
    if (localStorage.getItem('authUser')) {
      return true;
    } else {
      return false;
    }
  }







}
