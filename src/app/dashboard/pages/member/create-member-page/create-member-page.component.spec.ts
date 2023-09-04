import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMemberPageComponent } from './create-member-page.component';

describe('CreateMemberPageComponent', () => {
  let component: CreateMemberPageComponent;
  let fixture: ComponentFixture<CreateMemberPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMemberPageComponent]
    });
    fixture = TestBed.createComponent(CreateMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
