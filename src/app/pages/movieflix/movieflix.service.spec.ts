import { TestBed } from '@angular/core/testing';

import { MovieflixService } from './movieflix.service';

describe('MovieflixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieflixService = TestBed.get(MovieflixService);
    expect(service).toBeTruthy();
  });
});
