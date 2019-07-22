import { TestBed, inject } from '@angular/core/testing';

import { InvadeSvcService } from './invade-svc.service';

describe('InvadeSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvadeSvcService]
    });
  });

  it('should be created', inject([InvadeSvcService], (service: InvadeSvcService) => {
    expect(service).toBeTruthy();
  }));
});
