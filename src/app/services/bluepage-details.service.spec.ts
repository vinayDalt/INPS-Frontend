import { TestBed } from '@angular/core/testing';

import { BluepageDetailsService } from './bluepage-details.service';

describe('BluepageDetailsService', () => {
  let service: BluepageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BluepageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
