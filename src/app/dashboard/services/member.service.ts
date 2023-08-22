import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Member } from '../interfaces/member.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class MemberService {

    private http = inject(HttpClient);
    private baseURI: string = environment.baseURI;


    getMembers(): Observable<Member[]> {
        return this.http.get<Member[]>(`${this.baseURI}/members`);
    }

    getMemberById(id: string): Observable<Member | undefined> {
        return this.http.get<Member>(`${this.baseURI}/member/${id}`)
            .pipe(catchError(error => of(undefined)));
    }

    createMember(member: Member): Observable<Member> {
        return this.http.post<Member>(`${this.baseURI}/member`, member);

    }

    updateMember(member: Member): Observable<Member> {
        if (member.id) throw Error('Member id is required');
        return this.http.put<Member>(`${this.baseURI}/member/${member.id}`, member)
    }

    deleteMember(id: string): Observable<boolean> {
        return this.http.delete(`${this.baseURI}/member/${id}`)
            .pipe(map(response => true), catchError(error => of(false)))
    }




}