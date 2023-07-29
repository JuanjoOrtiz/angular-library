import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseURI: string = environment.baseURI;
  private http = inject(HttpClient);




  constructor() { }
}
