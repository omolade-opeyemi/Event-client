import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteeGroupComponent } from './invitee-group.component';

describe('InviteeGroupComponent', () => {
  let component: InviteeGroupComponent;
  let fixture: ComponentFixture<InviteeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
