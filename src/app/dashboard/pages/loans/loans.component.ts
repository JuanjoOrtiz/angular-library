import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Loan, LoanResponse } from '../../interfaces/loans-response';
import { LoanService } from '../../services/loans/loan.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent implements OnInit{

  @ViewChild('dt') dt: Table | undefined;
  Delete: any;

  selectedLoan: any;

  loanDialog: boolean = false;

  loans!: Loan[];

  loan!: Loan;

  first = 0;

  rows = 10;

  submitted: boolean = false;

  private LoanService = inject(LoanService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    this.LoanService.getLoans().subscribe((response: LoanResponse) => {this.loans = response.content
      console.log(this.loans)
    });
  }
  openNew() {
    this.loan = {};
    this.submitted = false;
    this.loanDialog = true;
  }


  editloan(loan: Loan) {
    this.loan = { ...loan };
    this.loanDialog = true;
  }

  deleteloan(loan: Loan) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar el prestamo' + loan.id + 'del socio'+ loan.member+'?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.loans = this.loans.filter((val) => val.id !== loan.id);
        this.loan = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'loan Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.loanDialog = false;
    this.submitted = false;
  }

  saveloan() {
    this.submitted = true;


      if (this.loan.id) {
        this.loans[this.findIndexById(this.loan.id)] = this.loan;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'loan Updated',
          life: 3000,
        });
      } else {
        this.loan.id = this.createId();
        this.loans.push(this.loan);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'loan Created',
          life: 3000,
        });
      }

      this.loans = [...this.loans];
      this.loanDialog = false;
      this.loan = {};

  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.loans.length; i++) {
      if (this.loans[i].id === id) {
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
    return this.loans ? this.first === this.loans.length - this.rows : true;
}

isFirstPage(): boolean {
    return this.loans ? this.first === 0 : true;
}
}
