import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { MovieflixService } from './movieflix.service';
import { MaterialModule } from 'src/app/components/utils/material.module';
import { MatMenuModule } from '@angular/material/menu';

describe('MovieflixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MaterialModule, MatMenuModule ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: MovieflixService = TestBed.get(MovieflixService);
    expect(service).toBeTruthy();
  });
});
