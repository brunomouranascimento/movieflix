import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieflixComponent } from './movieflix.component';

describe('MovieflixComponent', () => {
  let component: MovieflixComponent;
  let fixture: ComponentFixture<MovieflixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieflixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
