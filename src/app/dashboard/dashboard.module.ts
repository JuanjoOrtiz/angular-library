import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';


import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { BooksComponent } from './pages/books/books.component';
import { LoansComponent } from './pages/loans/loans.component';
import { MembersComponent } from './pages/members/members.component';




@NgModule({
  declarations: [
    DashboardLayoutComponent,
    BooksComponent,
    LoansComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class DashboardModule { }
