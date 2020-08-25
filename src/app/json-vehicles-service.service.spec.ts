import { TestBed } from '@angular/core/testing';

import { JsonVehiclesServiceService } from './json-vehicles-service.service';

describe('JsonVehiclesServiceService', () => {
  let service: JsonVehiclesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonVehiclesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
