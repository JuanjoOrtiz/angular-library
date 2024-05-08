import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Book, BooksResponse} from '../../interfaces/books-response';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { BookService } from '../../services/books/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  Delete: any;

  selectedBook: any;

  bookDialog: boolean = false;

  books!: Book[];

  book!: Book;

  first = 0;

  rows = 10;

  submitted: boolean = false;

  private bookService = inject(BookService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((response: BooksResponse) => {
      this.books = response.content;
    });
  }

  openNew() {
    this.book = {};
    this.submitted = false;
    this.bookDialog = true;
  }


  editbook(book: Book) {
    this.book = { ...book };
    this.bookDialog = true;
  }

  deletebook(book: Book) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar el libro' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter((val) => val.id !== book.id);
        this.book = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'book Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }

  savebook() {
    this.submitted = true;

    if (this.book.title?.trim()) {
      if (this.book.id) {
        this.books[this.findIndexById(this.book.id)] = this.book;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'book Updated',
          life: 3000,
        });
      } else {
        this.book.id = this.createId();
        this.books.push(this.book);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'book Created',
          life: 3000,
        });
      }

      this.books = [...this.books];
      this.bookDialog = false;
      this.book = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    let chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

pageChange(event:any) {
    this.first = event.first;
    this.rows = event.rows;
}

isLastPage(): boolean {
    return this.books ? this.first === this.books.length - this.rows : true;
}

isFirstPage(): boolean {
    return this.books ? this.first === 0 : true;
}
}
