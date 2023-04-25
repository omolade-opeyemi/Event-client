import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingmodalComponent } from './seatingmodal.component';

describe('SeatingmodalComponent', () => {
  let component: SeatingmodalComponent;
  let fixture: ComponentFixture<SeatingmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
