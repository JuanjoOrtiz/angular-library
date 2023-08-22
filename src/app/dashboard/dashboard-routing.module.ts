import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MemberListPageComponent } from './pages/member/member-list-page/member-list-page.component';
import { CreateMemberPageComponent } from './pages/member/create-member-page/create-member-page.component';
import { LoanListPageComponent } from './pages/loan/loan-list-page/loan-list-page.component';
import { BookListPageComponent } from './pages/book/book-list-page/book-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'memberList', component: MemberListPageComponent },
      { path: 'loanList', component: LoanListPageComponent },
      { path: 'bookList', component: BookListPageComponent },
      { path: 'createMember', component: CreateMemberPageComponent },
      { path: '**', redirectTo: 'loanList' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
