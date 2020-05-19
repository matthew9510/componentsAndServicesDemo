import { TestBed } from '@angular/core/testing';

import { StorageOneService } from './storage-one.service';

describe('StorageOneService', () => {
  let service: StorageOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
