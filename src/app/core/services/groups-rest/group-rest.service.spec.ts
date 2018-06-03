import { TestBed, inject } from '@angular/core/testing';

import { GroupRestService } from './group-rest.service';

describe('GroupRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupRestService]
    });
  });

  it('should be created', inject([GroupRestService], (service: GroupRestService) => {
    expect(service).toBeTruthy();
  }));
});
