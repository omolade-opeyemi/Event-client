import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesevenComponent } from './templateseven.component';

describe('TemplatesevenComponent', () => {
  let component: TemplatesevenComponent;
  let fixture: ComponentFixture<TemplatesevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
