import { TestBed } from '@angular/core/testing';

import { ReadingFormatterService } from './reading-formatter.service';

describe('ReadingFormatterService', () => {
  let service: ReadingFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
