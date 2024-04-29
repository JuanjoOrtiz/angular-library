import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/books-response';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private baseUrl = environment.baseUrl;

  http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);

  }

  getBookbyId(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books`, book);
  }

  updateBook(book: Book): Observable<Book> {
    if (!book.id) throw Error('Book id is required');
    return this.http.patch(`${this.baseUrl}/books/${book.id}`, book);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
}
