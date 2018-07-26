import { TestBed, inject } from '@angular/core/testing';

import { TypeAircraftService } from './type-aircraft.service';

describe('TypeAircraftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeAircraftService]
    });
  });

  it('should be created', inject([TypeAircraftService], (service: TypeAircraftService) => {
    expect(service).toBeTruthy();
  }));
});
