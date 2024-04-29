import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../../interfaces/members-response';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = environment.baseUrl;

  http = inject(HttpClient);

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/members`);

  }

  getMemberbyId(id: string): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/members/${id}`);
  }

  addMemberk(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}/members`,member);
  }

  updateMember(member: Member): Observable<Member> {
    if (!member.id) throw Error('Member id is required');
    return this.http.patch(`${this.baseUrl}/members/${member.id}`, member);
  }

  deleteMember(id: string) {
    return this.http.delete(`${this.baseUrl}/members/${id}`);
  }
}
