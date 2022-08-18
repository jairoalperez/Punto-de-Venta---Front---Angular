import { TestBed } from '@angular/core/testing';

import { ServenService } from './serven.service';

describe('ServenService', () => {
  let service: ServenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
