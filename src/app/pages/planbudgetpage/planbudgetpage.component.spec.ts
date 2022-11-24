import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanbudgetpageComponent } from './planbudgetpage.component';

describe('PlanbudgetpageComponent', () => {
  let component: PlanbudgetpageComponent;
  let fixture: ComponentFixture<PlanbudgetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanbudgetpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanbudgetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
