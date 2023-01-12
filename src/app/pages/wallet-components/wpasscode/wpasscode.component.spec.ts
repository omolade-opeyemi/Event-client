import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpasscodeComponent } from './wpasscode.component';

describe('WpasscodeComponent', () => {
  let component: WpasscodeComponent;
  let fixture: ComponentFixture<WpasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpasscodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
