import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Member } from '../../interfaces/members-response';
import { MemberService } from '../../services/members/member.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit{

  @ViewChild('dt') dt: Table | undefined;
  Delete: any;

  selectedMember: any;

  memberDialog: boolean = false;

  members!: Member[];

  member!: Member;

  submitted: boolean = false;

  private memberService = inject(MemberService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);


  ngOnInit(): void {
    this.memberService.getMembers().subscribe((members) => (this.members = members));
  }
  openNew() {
    this.member = {};
    this.submitted = false;
    this.memberDialog = true;
  }


  editMember(member: Member) {
    this.member = { ...member };
    this.memberDialog = true;
  }

  deleteMember(member: Member) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar al socio' + member.name+'?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.members = this.members.filter((val) => val.id !== member.id);
        this.member = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'loan Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.memberDialog = false;
    this.submitted = false;
  }

  saveMember() {
    this.submitted = true;


      if (this.member.id) {
        this.members[this.findIndexById(this.member.id)] = this.member;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Socio actualizado',
          life: 3000,
        });
      } else {
        this.member.id = this.createId();
        this.members.push(this.member);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Socio Creado',
          life: 3000,
        });
      }

      this.members = [...this.members];
      this.memberDialog = false;
      this.member = {};

  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    let chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
