import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarComponent } from './rar.component';

describe('RarComponent', () => {
  let component: RarComponent;
  let fixture: ComponentFixture<RarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
