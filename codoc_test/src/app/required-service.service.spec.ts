import { TestBed } from '@angular/core/testing';

import { RequiredServiceService } from './required-service.service';

describe('RequiredServiceService', () => {
  let service: RequiredServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequiredServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
