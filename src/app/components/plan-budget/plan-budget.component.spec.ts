import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBudgetComponent } from './plan-budget.component';

describe('PlanBudgetComponent', () => {
  let component: PlanBudgetComponent;
  let fixture: ComponentFixture<PlanBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
