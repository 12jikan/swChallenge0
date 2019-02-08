import { TestBed } from '@angular/core/testing';

import { StarWarsDataService } from './star-wars-data.service';

describe('StarWarsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarsDataService = TestBed.get(StarWarsDataService);
    expect(service).toBeTruthy();
  });
});
