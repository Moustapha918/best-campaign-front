import { TestBed } from '@angular/core/testing';

import { PartisanService } from './partisan.service';

describe('PartisanService', () => {
  let service: PartisanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartisanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
