import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Libros',
        icon: 'pi pi-fw pi-book',
        routerLink:['/books'],

      },
      {
        label: 'Prestamos',
        icon: 'pi pi-fw pi-calendar-clock',
        routerLink:['/loans']

      },
      {
        label: 'Socios',
        icon: 'pi pi-fw pi-user',
        routerLink:['/members']
      },
    ];
  }


    }
