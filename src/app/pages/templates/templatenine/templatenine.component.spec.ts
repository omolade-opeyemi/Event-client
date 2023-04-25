import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatenineComponent } from './templatenine.component';

describe('TemplatenineComponent', () => {
  let component: TemplatenineComponent;
  let fixture: ComponentFixture<TemplatenineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatenineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
