import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { BooksComponent } from './pages/books/books.component';
import { LoansComponent } from './pages/loans/loans.component';
import { MembersComponent } from './pages/members/members.component';

const routes: Routes = [
{path: '', component:DashboardLayoutComponent ,
children:[
  {path: 'books', component:BooksComponent},
  {path: 'loans', component:LoansComponent},
  {path: 'members', component:MembersComponent},
  {path:'**', redirectTo: 'books'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
