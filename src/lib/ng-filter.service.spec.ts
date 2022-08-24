import { TestBed } from '@angular/core/testing';

import { NgFilterService } from './ng-filter.service';

describe('NgFilterService', () => {
  let service: NgFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
