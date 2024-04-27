import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
{path: '', component:DashboardLayoutComponent ,
children:[
  {path: 'books', component:BooksComponent},
  {path:'**', redirectTo: 'books'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
