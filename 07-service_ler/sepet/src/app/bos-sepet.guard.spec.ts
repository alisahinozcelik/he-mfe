import { TestBed, async, inject } from '@angular/core/testing';

import { BosSepetGuard } from './bos-sepet.guard';

describe('BosSepetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BosSepetGuard]
    });
  });

  it('should ...', inject([BosSepetGuard], (guard: BosSepetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
