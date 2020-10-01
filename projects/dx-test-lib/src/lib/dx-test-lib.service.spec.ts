import { TestBed } from '@angular/core/testing';

import { DxTestLibService } from './dx-test-lib.service';

describe('DxTestLibService', () => {
  let service: DxTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
