import { TestBed } from '@angular/core/testing';

import { PasaService } from './pasa.service';

describe('PasaService', () => {
  let service: PasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
