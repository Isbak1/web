import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPublicationSharedComponent } from './sell-publication-shared.component';

describe('SellPublicationSharedComponent', () => {
  let component: SellPublicationSharedComponent;
  let fixture: ComponentFixture<SellPublicationSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPublicationSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPublicationSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
