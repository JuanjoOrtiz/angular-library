import { Component, inject } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MemberService } from '../../../services/member.service';
import { Member } from 'src/app/dashboard/interfaces/member.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberlist:not(p)',
  templateUrl: './member-list-page.component.html',
  styleUrls: ['./member-list-page.component.scss'],
  host: { 'some-binding': 'some-value' },
})
export class MemberListPageComponent {
  faPlus = faPlus;

  private memberService = inject(MemberService);
  private router = inject(Router);

  public members: Member[] = [];



  getMembers() {
    this.memberService.getMembers().subscribe(data => {
      this.members = data;
    })
  }

  goCreateMember() {
    this.router.navigateByUrl('/createMember');
  }

}
