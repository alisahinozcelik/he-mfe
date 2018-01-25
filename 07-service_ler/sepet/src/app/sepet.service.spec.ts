import { TestBed, inject } from '@angular/core/testing';

import { SepetService } from './sepet.service';

describe('SepetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SepetService]
    });
  });

  it('should be created', inject([SepetService], (service: SepetService) => {
    expect(service).toBeTruthy();
  }));
});
