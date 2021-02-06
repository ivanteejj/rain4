import { TestBed } from '@angular/core/testing';

import { RainfallResolverService } from './rainfall-resolver.service';

describe('RainfallResolverService', () => {
  let service: RainfallResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainfallResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
