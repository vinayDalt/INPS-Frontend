import { TestBed } from '@angular/core/testing';

import { W3SSORetrievalService } from './w3-ssoretrieval.service';

describe('W3SSORetrievalService', () => {
  let service: W3SSORetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W3SSORetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
