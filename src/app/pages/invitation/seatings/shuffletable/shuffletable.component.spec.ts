import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffletableComponent } from './shuffletable.component';

describe('ShuffletableComponent', () => {
  let component: ShuffletableComponent;
  let fixture: ComponentFixture<ShuffletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffletableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShuffletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
