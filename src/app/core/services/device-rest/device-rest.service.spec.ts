import { TestBed, inject } from '@angular/core/testing';

import { DeviceRestService } from './device-rest.service';

describe('DeviceRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceRestService]
    });
  });

  it('should be created', inject([DeviceRestService], (service: DeviceRestService) => {
    expect(service).toBeTruthy();
  }));
});
