import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletlandingComponent } from './walletlanding.component';

describe('WalletlandingComponent', () => {
  let component: WalletlandingComponent;
  let fixture: ComponentFixture<WalletlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
