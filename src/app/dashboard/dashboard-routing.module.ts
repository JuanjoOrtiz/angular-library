import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { BooksComponent } from './pages/books/books.component';
import { LoansComponent } from './pages/loans/loans.component';
import { MembersComponent } from './pages/members/members.component';
import { authGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
{path: '', component:DashboardLayoutComponent ,
children:[
  {path: 'books', component:BooksComponent,  canActivate: [authGuard]},
  {path: 'loans', component:LoansComponent,  canActivate: [authGuard]},
  {path: 'members', component:MembersComponent,  canActivate: [authGuard]},
  {path:'**', redirectTo: 'books', pathMatch: 'full'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
