import { TestBed } from '@angular/core/testing';

import { HttpRetrieveService } from './http-retrieve.service';

describe('HttpRetrieveService', () => {
  let service: HttpRetrieveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRetrieveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
