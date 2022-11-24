import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeventpageComponent } from './createeventpage.component';

describe('CreateeventpageComponent', () => {
  let component: CreateeventpageComponent;
  let fixture: ComponentFixture<CreateeventpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateeventpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateeventpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
