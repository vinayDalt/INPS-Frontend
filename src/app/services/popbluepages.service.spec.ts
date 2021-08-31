import { TestBed } from '@angular/core/testing';

import { POPBluepagesService } from './popbluepages.service';

describe('POPBluepagesService', () => {
  let service: POPBluepagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POPBluepagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
