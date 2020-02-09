import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductSpaceComponent } from './top-product-space.component';

describe('TopProductSpaceComponent', () => {
  let component: TopProductSpaceComponent;
  let fixture: ComponentFixture<TopProductSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopProductSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
