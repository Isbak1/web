import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPublicationSharedComponent } from './alert-publication-shared.component';

describe('AlertPublicationSharedComponent', () => {
  let component: AlertPublicationSharedComponent;
  let fixture: ComponentFixture<AlertPublicationSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPublicationSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPublicationSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
