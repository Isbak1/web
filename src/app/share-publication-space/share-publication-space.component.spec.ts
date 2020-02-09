import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePublicationSpaceComponent } from './share-publication-space.component';

describe('SharePublicationSpaceComponent', () => {
  let component: SharePublicationSpaceComponent;
  let fixture: ComponentFixture<SharePublicationSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePublicationSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePublicationSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
