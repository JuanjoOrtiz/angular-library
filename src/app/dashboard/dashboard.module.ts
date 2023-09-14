import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MemberListPageComponent } from './pages/member/member-list-page/member-list-page.component';
import { CreateMemberPageComponent } from './pages/member/create-member-page/create-member-page.component';
import { LoanListPageComponent } from './pages/loan/loan-list-page/loan-list-page.component';
import { BookListPageComponent } from './pages/book/book-list-page/book-list-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NavbarComponent, DashboardLayoutComponent, MemberListPageComponent, CreateMemberPageComponent, LoanListPageComponent, BookListPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule
  ]
})
export class DashboardModule { }
