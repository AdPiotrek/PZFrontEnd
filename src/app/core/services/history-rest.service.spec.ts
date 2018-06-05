import { TestBed, inject } from '@angular/core/testing';

import { HistoryRestService } from './history-rest.service';

describe('HistoryRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryRestService]
    });
  });

  it('should be created', inject([HistoryRestService], (service: HistoryRestService) => {
    expect(service).toBeTruthy();
  }));
});
