import { TestBed } from '@angular/core/testing';

import { ScheduleUpdateService } from './schedule-update.service';

describe('ScheduleUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleUpdateService = TestBed.get(ScheduleUpdateService);
    expect(service).toBeTruthy();
  });
});
