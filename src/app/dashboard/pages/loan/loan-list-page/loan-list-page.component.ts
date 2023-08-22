import { Component } from '@angular/core';

@Component({
  selector: 'app-loanList:not(p)',
  templateUrl: './loan-list-page.component.html',
  styleUrls: ['./loan-list-page.component.scss'],
  host: { 'some-binding': 'some-value' },

})
export class LoanListPageComponent {

}
