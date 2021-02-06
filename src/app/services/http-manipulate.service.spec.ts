import { TestBed } from '@angular/core/testing';

import { HttpManipulateService } from './http-manipulate.service';

describe('HttpManipulateService', () => {
  let service: HttpManipulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpManipulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
