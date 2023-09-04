import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private authSerivce = inject(AuthService)
  private router = inject(Router);


  handleLogout() {
    this.authSerivce.logout().subscribe({
      next: result => {
        this.router.navigate(['/']);

      },
      error: (error => {
        console.log("error");

      })
    })

  }





}
