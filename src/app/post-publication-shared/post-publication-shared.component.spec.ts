import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublicationSharedComponent } from './post-publication-shared.component';

describe('PostPublicationSharedComponent', () => {
  let component: PostPublicationSharedComponent;
  let fixture: ComponentFixture<PostPublicationSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPublicationSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPublicationSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
