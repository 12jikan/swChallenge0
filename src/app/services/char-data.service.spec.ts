import { TestBed } from '@angular/core/testing';

import { CharDataService } from './char-data.service';

describe('CharDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharDataService = TestBed.get(CharDataService);
    expect(service).toBeTruthy();
  });
});
