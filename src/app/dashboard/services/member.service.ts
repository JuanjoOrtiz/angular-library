import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Member } from '../interfaces/member.interface';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseURI = environment.baseURI;

  constructor(private http: HttpClient) {
  }

 
  public getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseURI}/member`);

  }


}
