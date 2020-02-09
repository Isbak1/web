import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSignModalComponent } from './mobile-sign-modal.component';

describe('MobileSignModalComponent', () => {
  let component: MobileSignModalComponent;
  let fixture: ComponentFixture<MobileSignModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSignModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
