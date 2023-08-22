import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanListPageComponent } from './loan-list-page.component';

describe('LoanListPageComponent', () => {
  let component: LoanListPageComponent;
  let fixture: ComponentFixture<LoanListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanListPageComponent]
    });
    fixture = TestBed.createComponent(LoanListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
