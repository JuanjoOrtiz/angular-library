import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

// Primeng Modules
import { MenubarModule } from 'primeng/menubar';



import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MenubarModule

  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
