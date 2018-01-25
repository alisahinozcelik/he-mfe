import { TestBed, inject } from '@angular/core/testing';

import { ListeService } from './liste.service';

describe('ListeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeService]
    });
  });

  it('should be created', inject([ListeService], (service: ListeService) => {
    expect(service).toBeTruthy();
  }));
});
