import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpasscodeComponent } from './trpasscode.component';

describe('TrpasscodeComponent', () => {
  let component: TrpasscodeComponent;
  let fixture: ComponentFixture<TrpasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrpasscodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrpasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
