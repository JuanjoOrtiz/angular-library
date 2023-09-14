import { Component, inject, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MemberService } from '../../../services/member.service';
import { Member } from 'src/app/dashboard/interfaces/member.interface';
import { Router } from '@angular/router';



/*const MEMBERS_DATA: Member[] = [
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'},
  { memberShipNumber: 'AC000001' ,name: 'Hydrogen', nif: '333333333F', brithdayDate: '15/05/1985', mobile:'666666661',address: 'Avenida de la información 15 3ºB', email: 'john.doe@gmail.com', province: 'Madrid'}
];*/






@Component({
  selector: 'app-memberlist:not(p)',
  templateUrl: './member-list-page.component.html',
  styleUrls: ['./member-list-page.component.scss'],

})
export class MemberListPageComponent implements OnInit {
  faPlus = faPlus;

  private memberService = inject(MemberService);
  private router = inject(Router);

  public members: Member[] = [];

  displayedColumns: string[] = ['memberShipNumber', 'name', 'nif', 'brithdayDate', 'mobile', 'address', 'email', 'province'];
  // dataSource = Member;

ngOnInit(): void {
    this.getMembers();
}

  getMembers() {
    this.memberService.getMembers()
      .subscribe({

        next: data => {
          this.members = data;
          console.log(data);
        },
        error: e => console.log(e)
      }
      )
  }

  goCreateMember() {
    this.router.navigateByUrl('/createMember');
  }

}
