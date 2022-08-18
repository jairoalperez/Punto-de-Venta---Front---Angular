import { TestBed } from '@angular/core/testing';

import { ClicomService } from './clicom.service';

describe('ClicomService', () => {
  let service: ClicomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClicomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
