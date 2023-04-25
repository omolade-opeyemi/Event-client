import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesixComponent } from './templatesix.component';

describe('TemplatesixComponent', () => {
  let component: TemplatesixComponent;
  let fixture: ComponentFixture<TemplatesixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
