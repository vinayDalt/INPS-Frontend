import { TestBed } from '@angular/core/testing';

import { MailrecommendationService } from './mailrecommendation.service';

describe('MailrecommendationService', () => {
  let service: MailrecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailrecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
