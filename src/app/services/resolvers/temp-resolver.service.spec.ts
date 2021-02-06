import { TestBed } from '@angular/core/testing';

import { TempResolverService } from './temp-resolver.service';

describe('TempResolverService', () => {
  let service: TempResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
