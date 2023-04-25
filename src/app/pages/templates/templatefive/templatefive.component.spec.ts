import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefiveComponent } from './templatefive.component';

describe('TemplatefiveComponent', () => {
  let component: TemplatefiveComponent;
  let fixture: ComponentFixture<TemplatefiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatefiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
