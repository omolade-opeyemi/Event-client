import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvpageComponent } from './ivpage.component';

describe('IvpageComponent', () => {
  let component: IvpageComponent;
  let fixture: ComponentFixture<IvpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
