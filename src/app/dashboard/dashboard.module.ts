import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { BooksComponent } from './pages/books/books.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class DashboardModule { }
