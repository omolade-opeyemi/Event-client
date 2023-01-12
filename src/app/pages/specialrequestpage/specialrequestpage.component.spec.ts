import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialrequestpageComponent } from './specialrequestpage.component';

describe('SpecialrequestpageComponent', () => {
  let component: SpecialrequestpageComponent;
  let fixture: ComponentFixture<SpecialrequestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialrequestpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialrequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
