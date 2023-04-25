import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatethreeComponent } from './templatethree.component';

describe('TemplatethreeComponent', () => {
  let component: TemplatethreeComponent;
  let fixture: ComponentFixture<TemplatethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatethreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
