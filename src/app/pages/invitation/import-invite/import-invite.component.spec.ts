import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportInviteComponent } from './import-invite.component';

describe('ImportInviteComponent', () => {
  let component: ImportInviteComponent;
  let fixture: ComponentFixture<ImportInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
