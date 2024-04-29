import { inject, Injectable } from '@angular/core';
import { Loan } from '../../interfaces/loans-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = environment.baseUrl;

  http = inject(HttpClient);

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}/loans`);

  }

  getloanbyId(id: string): Observable<Loan> {
    return this.http.get<Loan>(`${this.baseUrl}/loans/${id}`);
  }

  addBook(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(`${this.baseUrl}/loans`,loan);
  }

  updateBook(loan: Loan): Observable<Loan> {
    if (!loan.id) throw Error('Loan id is required');
    return this.http.patch(`${this.baseUrl}/books/${loan.id}`, loan);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
}
