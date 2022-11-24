import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodvendorComponent } from './foodvendor.component';

describe('FoodvendorComponent', () => {
  let component: FoodvendorComponent;
  let fixture: ComponentFixture<FoodvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodvendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
