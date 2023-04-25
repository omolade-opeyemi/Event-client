import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefourComponent } from './templatefour.component';

describe('TemplatefourComponent', () => {
  let component: TemplatefourComponent;
  let fixture: ComponentFixture<TemplatefourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatefourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
