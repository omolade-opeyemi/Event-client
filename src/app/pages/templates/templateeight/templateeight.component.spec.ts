import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateeightComponent } from './templateeight.component';

describe('TemplateeightComponent', () => {
  let component: TemplateeightComponent;
  let fixture: ComponentFixture<TemplateeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
