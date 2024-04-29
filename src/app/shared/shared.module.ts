import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';

// Primeng Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';



import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MenubarModule,


  ],
  exports:[NavbarComponent, FormsModule, ReactiveFormsModule, ButtonModule, ConfirmDialogModule,DialogModule,InputTextModule,MessagesModule,CardModule,TableModule,ToolbarModule,
  ToastModule
  ],
  providers:[MessageService, ConfirmationService]
})
export class SharedModule { }
