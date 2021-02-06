import { TestBed } from '@angular/core/testing';

import { HumidityResolverService } from './humidity-resolver.service';

describe('HumidityResolverService', () => {
  let service: HumidityResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumidityResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
